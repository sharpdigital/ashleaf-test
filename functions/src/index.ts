import * as cors from 'cors';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import * as rp from 'request-promise';

const corsHandler = cors({ origin: true });

admin.initializeApp();

function getMessage(error: boolean, message: string) {
    return { error, message };
}

function respondWithError(res: functions.Response, message: string) {
    res.json(getMessage(true, message));
}

function respondWithSuccess(res: functions.Response, message: string) {
    res.json(getMessage(false, message));
}

function saveReview(req: functions.Request, res: functions.Response) {
    const { name, location, review } = req.body;

    admin
        .firestore()
        .collection('reviews')
        .add({
            original: {
                displayName: `${ name }, ${ location }`,
                review,
                isApproved: false,
                createdAt: admin.firestore.Timestamp.fromDate(new Date()),
            },
        })
        .then((writeResult) => respondWithSuccess(
            res,
            `The review (${ writeResult.id }) added successfully.`,
        ))
        .catch(() => respondWithError(
            res,
            'All fields are required!',
        ));
}

function checkRecaptcha(req: functions.Request) {
    const response = req.query.response;
    console.log('recaptcha response', response);
    return rp({
        uri: 'https://recaptcha.google.com/recaptcha/api/siteverify',
        method: 'POST',
        formData: {
            secret: '6LcsxZYUAAAAAAWA8_TlaIF1ZzRoycY2y1qF-OY9',
            response: response,
        },
        json: true,
    });
}

function isValidRequest(req: functions.Request): boolean {
    const { name, location, review } = req.body;

    return req.query.response && name && location && review;
}

exports.addReview = functions
    .region('europe-west1')
    .https
    .onRequest((req, res) => {
        corsHandler(req, res, () => {
            if (isValidRequest(req)) {
                checkRecaptcha(req)
                    .then(result => {
                        console.log('recaptcha result', result);
                        if (result.success) {
                            saveReview(req, res);
                        } else {
                            respondWithError(res, `Recaptcha verification failed. Are you a robot? ${ result }`);
                        }
                    })
                    .catch(reason => respondWithError(res, `All fields are required! ${ reason }`));
            } else {
                respondWithError(res, 'All fields are required!');
            }
        });
    });


function saveReservation(req: functions.Request, res: functions.Response) {
    const { day, subscriberId } = req.body;

    admin
        .firestore()
        .collection('reservations')
        .add({
            day,
            subscriberId,
        })
        .then(() => respondWithSuccess(
            res,
            `You have successfully reserved the leaf collected on day ${ day }`,
        ))
        .catch(() => respondWithError(
            res,
            `Unfortunately the leaf collected on day ${ day } is no longer available for reservation. Please select another available leaf.`,
        ));
}

function removeReservation(req: functions.Request, res: functions.Response) {
    const { day } = req.body;

    const collection = admin
        .firestore()
        .collection('reservations');

    collection
        .where('day', '==', day)
        .get()
        .then(snapshot => {
            if (snapshot.empty) {
                respondWithError(res, `The leaf collected on day ${ day } is already released.`);
            }

            snapshot.forEach(doc => {
                collection.doc(doc.id).delete().then(
                    () => {
                        respondWithSuccess(
                            res,
                            `You have successfully released the leaf collected on day ${ day }`,
                        );
                    },
                    (rejectReason) => {
                        respondWithError(
                            res,
                            `Unsuccessful delete: ${rejectReason}`,
                        )
                    },
                );
            });

        })
        .catch(() => respondWithError(
            res,
            `Unfortunately the leaf collected on day ${ day } is still reservation. Please try again.`,
        ));
}

function isValidReservationRequest(req: functions.Request): boolean {
    const { day, subscriberId } = req.body;

    return day && subscriberId;
}

exports.reserveLeaf = functions
    .region('europe-west1')
    .https
    .onRequest((req, res) => {
        corsHandler(req, res, () => {
            if (isValidReservationRequest(req)) {
                saveReservation(req, res);
            } else {
                respondWithError(res, 'All fields are required!');
            }
        });
    });

function isValidReleaseRequest(req: functions.Request): boolean {
    const { day } = req.body;

    return !!day;
}

exports.releaseLeaf = functions
    .region('europe-west1')
    .https
    .onRequest((req, res) => {
        corsHandler(req, res, () => {
            if (isValidReleaseRequest(req)) {
                removeReservation(req, res);
            } else {
                respondWithError(res, 'All fields are required!');
            }
        });
    });
