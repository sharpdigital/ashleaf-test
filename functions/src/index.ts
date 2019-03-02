import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

exports.addReview = functions.https.onRequest((req, res) => {
    const {name, location, review} = req.body;

    if (!name || !location || !review) {
        return res.json({
            error: true,
            message: 'All fields are required!',
        });
    }

    return admin.firestore()
        .collection('reviews')
        .add({
            original: {
                displayName: `${name}, ${location}`,
                review,
                isApproved: false,
                createdAt: admin.firestore.Timestamp.fromDate(new Date()),
            },
        })
        .then((writeResult) => res.json({
            error: false,
            result: `Message with ID: ${writeResult.id} added.`,
        }))
        .catch(() => res.json({
            error: true,
            message: 'Something went wrong, please try again!',
        }));
});
