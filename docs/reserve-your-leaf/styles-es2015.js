(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/janoscsikos/Projects/ashleaf-nx/node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!/Users/janoscsikos/Projects/ashleaf-nx/node_modules/postcss-loader/src??embedded!/Users/janoscsikos/Projects/ashleaf-nx/node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles.scss ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nhtml {\n  -webkit-font-smoothing: antialiased;\n}\nbody {\n  font-size: 30px;\n  font-weight: 200;\n}\nh1 {\n  text-align: center;\n  margin: 0;\n}\nh1 img {\n  width: 83.3%;\n  margin-top: 2vw;\n}\nh2,\n.motto {\n  font-size: 1.2em;\n}\nh2, h2 a, h2 a:hover, h2 a:active, h2 a:visited {\n  margin: 0;\n  color: #815241;\n  font-weight: 200;\n}\np {\n  margin-bottom: 0;\n}\nhr {\n  -moz-border-bottom-colors: none;\n  -moz-border-image: none;\n  -moz-border-left-colors: none;\n  -moz-border-right-colors: none;\n  -moz-border-top-colors: none;\n  border-color: #bbb;\n  border-style: solid none;\n  border-width: 1px 0 0 0;\n  margin: 0 auto;\n  text-align: center;\n  width: 83.3%;\n}\ninput[type=checkbox] + label {\n  display: inline;\n}\n.row.navigation {\n  padding: 1.5vw 0 0;\n}\n.row > p:not(:first-child) {\n  padding-top: 1em;\n}\n.navbar {\n  float: right;\n  position: relative;\n  left: -50%;\n  text-align: left;\n  border: none;\n  padding-top: 27px;\n}\n.navbar-brand {\n  display: inline;\n}\n.navbar-brand > img {\n  display: inline;\n}\n.navbar-nav {\n  position: relative;\n  left: 50%;\n  list-style-type: none;\n}\nform table {\n  width: 100%;\n  text-align: center;\n}\nform td {\n  color: #ffffff;\n  padding-bottom: 10px;\n}\nform select {\n  color: #4d4d4d;\n}\n.navbar .icon-bar {\n  background-color: white;\n}\n.navbar-nav li a {\n  color: #233b46;\n  font-weight: normal;\n  border-right: 1px solid #233b46;\n  border-radius: 0;\n  padding: 0 15px;\n  margin: 10px 0;\n}\n.navbar-nav li:last-child a {\n  background-color: transparent;\n  border-right: none;\n}\n.navbar-nav li.active a {\n  background-color: transparent;\n  font-weight: bold;\n}\n.navbar-nav li a:hover {\n  background-color: transparent;\n  color: #233b46;\n  text-decoration: none;\n}\nimg {\n  width: 100%;\n  height: auto;\n}\n.row {\n  padding: 4vw 0;\n  color: #4d4d4d;\n  line-height: 1.2em;\n}\n.light-bg {\n  background-color: #b7c6d0;\n  color: #233b46;\n}\n.dark-bg {\n  background-color: #233b46;\n  color: white;\n}\n.light-bg hr {\n  border-color: #233b46;\n}\n.slideshow p {\n  display: none;\n  text-align: center;\n  width: 100%;\n  margin: 0;\n}\n.cycle-slide {\n  padding: 0 15px;\n}\n.slideshow p:first {\n  display: block;\n}\n.border-bottom {\n  border-bottom: 1px solid #bbb;\n}\n.quotes .citation {\n  color: #ccb090;\n  font-weight: normal;\n}\n.social {\n  float: left;\n  width: 100%;\n  position: absolute;\n  z-index: 1000;\n  margin-top: -30px;\n}\n.round-icon {\n  background-color: #385f73;\n  border-radius: 50%;\n  color: white;\n  font-size: 28px;\n  height: 60px;\n  /* fontsize + 2 * padding */\n  padding: 16px;\n  width: 60px;\n  /* fontsize + 2 * padding */\n}\n.round-icon.small {\n  font-size: 14px;\n  height: 22px;\n  /* fontsize + 2 * padding */\n  padding: 4px;\n  width: 22px;\n  /* fontsize + 2 * padding */\n}\n.motto-mobile {\n  display: none;\n}\n.reviews {\n  background-image: url('cherry-variations.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.reviews .dark-bg {\n  background-color: rgba(35, 59, 70, 0.9);\n}\n.reviews h2 {\n  padding: 1em;\n  font-weight: normal;\n}\n.reviews hr,\n.subscription hr {\n  border-color: #ccb090;\n  width: 60%;\n}\n.subscription .social {\n  margin-top: -11px;\n}\n.subscription .social-wrap,\n.subscription .social-wrap > div > .container-fluid > .row {\n  padding-bottom: 0;\n  padding-top: 20px;\n}\n.subscription h2 {\n  color: #ccb090;\n}\n.subscription .rule {\n  padding-top: 1em;\n}\n.subscription .row .row p {\n  color: white;\n}\n.subscription .row .row p span.normal-weight {\n  font-weight: normal;\n}\n.subscription .row .row p a {\n  color: #ccb090;\n}\n.subscription .before-form,\n.subscription .row .row p:last-of-type {\n  padding-bottom: 1em;\n}\n.subscription form {\n  padding-top: 1em;\n}\n.subscription form img {\n  width: 1px;\n  height: 1px;\n  border: 0;\n}\n.reviews .quotes {\n  padding: 1em;\n}\n.review-us {\n  padding-bottom: 1em;\n}\n.review-us .link {\n  color: #815241;\n}\n.thank-you {\n  display: none;\n  padding-bottom: 1em;\n}\n.error {\n  display: none;\n  color: red;\n  padding-bottom: 1em;\n}\n.review-form {\n  display: none;\n  padding-bottom: 1em;\n}\n.review-form label {\n  font-weight: 200;\n  font-size: 18px;\n}\n.review-form p {\n  padding-bottom: 10px;\n}\n.review-form button {\n  background-color: #233b46;\n  color: white;\n}\n.review-form button:disabled,\n.review-form button[disabled] {\n  color: #333;\n}\n.social-wrap + .light-bg {\n  padding-bottom: 0;\n}\n.footer .round-icon {\n  background-color: #788e9c;\n}\n.footer a {\n  font-size: 18px;\n  color: #636363;\n  font-weight: 400;\n}\n.justify p {\n  text-align: justify;\n}\n.brief-description-gap {\n  padding-bottom: 8vw;\n}\n.newsletter p {\n  margin-bottom: 10px;\n}\n.form-control {\n  font-size: 18px;\n}\n.form-control input {\n  color: #ccb090;\n}\n.input1 {\n  margin: 3px;\n}\n.input2 {\n  margin: 3px 3px 3px 5px;\n}\n.contacts,\n.exhibition {\n  background-color: #888;\n  color: white;\n  margin-bottom: 1vw;\n}\n.exhibition span {\n  white-space: nowrap;\n}\n.contacts a,\n.exhibition a,\n.contacts a:hover,\n.exhibition a:hover,\n.contacts a:visited,\n.exhibition a:visited,\n.contacts a:active,\n.exhibition a:active {\n  color: white;\n  text-decoration: none;\n}\n.contacts {\n  text-align: justify;\n}\n.contacts > *,\n.exhibition > * {\n  padding-top: 2vw;\n  padding-bottom: 3vw;\n  border-top: 1px solid #bbb;\n}\n.contacts > :first-child,\n.exhibition > :first-child {\n  border-top: 0;\n}\n.copyright {\n  font-size: 18px;\n  color: #4d4d4d;\n  font-weight: 400;\n}\n.atcb-link {\n  padding: inherit !important;\n  background: inherit !important;\n  box-shadow: inherit !important;\n  color: inherit !important;\n  text-decoration: underline !important;\n  font-size: inherit !important;\n  font-family: inherit !important;\n}\n.btn-default {\n  padding: 4px 0 8px;\n  background-color: #b7c6d0;\n}\n/* Moblie portrait, landscape and Tablet portrait */\n@media all and (max-width: 992px) {\n  .footer {\n    line-height: 1.5em;\n  }\n\n  .row {\n    padding: 4vw 0;\n  }\n\n  .dark-bg {\n    padding: 6vw 0;\n  }\n\n  .col-md-6 img {\n    padding-top: 8vw;\n  }\n}\n@media all and (max-width: 1200px) {\n  .footer div.text-center {\n    text-align: left;\n  }\n\n  .footer i.small {\n    text-align: center;\n  }\n}\n@media all and (min-width: 1200px) {\n  .row.logo-row-margin {\n    padding-top: 2vw;\n  }\n\n  .row.motto {\n    padding-top: 3vw;\n    padding-bottom: 1.5vw;\n  }\n}\n@media all and (min-width: 768px) {\n  .reviews-page .social-wrap,\n.mobile {\n    display: none;\n  }\n\n  .container-fluid .container-fluid > .row:not(:first-child) {\n    padding-top: 0;\n  }\n}\n@media all and (max-width: 767px) {\n  body {\n    font-size: 18px;\n  }\n\n  .navbar {\n    width: 100%;\n    left: inherit;\n    padding-top: 15px;\n  }\n\n  .navbar-toggle {\n    float: left;\n    border: none;\n    padding-top: calc(7.5vw - 7.5px);\n  }\n\n  .navbar-brand {\n    float: right;\n    padding: 0;\n    height: inherit;\n  }\n\n  .collapse {\n    width: 100%;\n  }\n\n  .navbar-nav li {\n    text-align: center;\n    padding: 5px 0;\n  }\n\n  .navbar-nav li a {\n    border: none;\n  }\n\n  .navbar-nav {\n    left: inherit;\n    width: 100%;\n    -webkit-padding-start: 0;\n            padding-inline-start: 0;\n  }\n\n  .dark-bg {\n    padding: 10vw 0;\n  }\n\n  .social {\n    margin-top: -20px;\n  }\n\n  .subscription .social {\n    margin-top: 0;\n  }\n\n  .round-icon {\n    font-size: 20px;\n    height: 40px;\n    /* fontsize + 2 * padding */\n    padding: 10px;\n    width: 40px;\n    /* fontsize + 2 * padding */\n  }\n\n  .home-page .motto-mobile {\n    display: inherit;\n    padding: 0 0 4vw 0;\n  }\n\n  .home-page .motto,\n.home-page .motto + div,\n.reviews-page .social,\n.desktop {\n    display: none;\n  }\n\n  .reviews-page .reviews {\n    background: none;\n  }\n\n  .reviews-page h2 {\n    padding-top: 0;\n  }\n\n  .reviews-page .reviews .row {\n    padding-top: 0;\n    padding-bottom: 0;\n  }\n\n  .reviews-page .dark-bg {\n    padding: 6vw 0;\n  }\n\n  .footer div.text-center {\n    text-align: center;\n  }\n}\n.row.dark-bg.nopadding,\n.row.nopadding,\n.nopadding {\n  padding: 0;\n}\n.negative-margin {\n  margin-bottom: -20px;\n}\n.rule {\n  padding: 0;\n}\n.logo-row-margin {\n  color: white;\n  padding-bottom: 0;\n}\n.no-bottom-margin {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qYW5vc2NzaWtvcy9Qcm9qZWN0cy9hc2hsZWFmLW54L2FwcHMvYXNobGVhZi9zcmMvc3R5bGVzLnNjc3MiLCJhcHBzL2FzaGxlYWYvc3JjL3N0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUFBO0FBQ0E7RUFDRSxtQ0FBQTtBQ0NGO0FERUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7QURFQTs7RUFFRSxnQkFBQTtBQ0NGO0FERUE7RUFDRSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7QURFQTtFQUNFLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7QUNDRjtBREVBO0VBQ0Usa0JBQUE7QUNDRjtBREVBO0VBQ0UsZ0JBQUE7QUNDRjtBREVBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDQ0Y7QURFQTtFQUNFLGVBQUE7QUNDRjtBREVBO0VBQ0UsZUFBQTtBQ0NGO0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxxQkFBQTtBQ0NGO0FERUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FDQ0Y7QURFQTtFQUNFLGNBQUE7QUNDRjtBREVBO0VBQ0UsdUJBQUE7QUNDRjtBREVBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7QURFQTtFQUNFLDZCQUFBO0VBQ0Es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RSxrQkFBQTtFQ0VGO0FBQ0Y7QURDQTs7O0VBR0UsVUFBQTtBQ0NGO0FERUE7RUFDRSxvQkFBQTtBQ0NGO0FERUE7RUFDRSxVQUFBO0FDQ0Y7QURFQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0NGO0FERUE7RUFDRSxnQkFBQTtBQ0NGIiwiZmlsZSI6ImFwcHMvYXNobGVhZi9zcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sIHtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG59XG5cbmJvZHkge1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG59XG5cbmgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG5cbmgxIGltZyB7XG4gIHdpZHRoOiA4My4zJTtcbiAgbWFyZ2luLXRvcDogMnZ3O1xufVxuXG5oMixcbi5tb3R0byB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbmgyLCBoMiBhLCBoMiBhOmhvdmVyLCBoMiBhOmFjdGl2ZSwgaDIgYTp2aXNpdGVkIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzgxNTI0MTtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxucCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmhyIHtcbiAgLW1vei1ib3JkZXItYm90dG9tLWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItaW1hZ2U6IG5vbmU7XG4gIC1tb3otYm9yZGVyLWxlZnQtY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1yaWdodC1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLXRvcC1jb2xvcnM6IG5vbmU7XG4gIGJvcmRlci1jb2xvcjogI2JiYjtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZCBub25lO1xuICBib3JkZXItd2lkdGg6IDFweCAwIDAgMDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDgzLjMlO1xufVxuXG5pbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0gKyBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnJvdy5uYXZpZ2F0aW9uIHtcbiAgcGFkZGluZzogMS41dncgMCAwO1xufVxuXG4ucm93ID4gcDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbi5uYXZiYXIge1xuICBmbG9hdDogcmlnaHQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTUwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nLXRvcDogMjdweDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLm5hdmJhci1icmFuZCA+IGltZyB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLm5hdmJhci1uYXYge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDUwJTtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG5mb3JtIHRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuZm9ybSB0ZCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuZm9ybSBzZWxlY3Qge1xuICBjb2xvcjogIzRkNGQ0ZDtcbn1cblxuLm5hdmJhciAuaWNvbi1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdmJhci1uYXYgbGkgYSB7XG4gIGNvbG9yOiAjMjMzYjQ2O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjMzYjQ2O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4ubmF2YmFyLW5hdiBsaTpsYXN0LWNoaWxkIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4ubmF2YmFyLW5hdiBsaS5hY3RpdmUgYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hdmJhci1uYXYgbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzIzM2I0NjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5pbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ucm93IHtcbiAgcGFkZGluZzogNHZ3IDA7XG4gIGNvbG9yOiAjNGQ0ZDRkO1xuICBsaW5lLWhlaWdodDogMS4yZW07XG59XG5cbi5saWdodC1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiN2M2ZDA7XG4gIGNvbG9yOiAjMjMzYjQ2O1xufVxuXG4uZGFyay1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzNiNDY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmxpZ2h0LWJnIGhyIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjMzYjQ2O1xufVxuXG4uc2xpZGVzaG93IHAge1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5jeWNsZS1zbGlkZSB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnNsaWRlc2hvdyBwOmZpcnN0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ib3JkZXItYm90dG9tIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNiYmI7XG59XG5cbi5xdW90ZXMgLmNpdGF0aW9uIHtcbiAgY29sb3I6ICNjY2IwOTA7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5zb2NpYWwge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDtcbiAgbWFyZ2luLXRvcDogLTMwcHg7XG59XG5cbi5yb3VuZC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM4NWY3MztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgZm9udC1zaXplOiAyOHB4O1xuICBoZWlnaHQ6IDYwcHg7IC8qIGZvbnRzaXplICsgMiAqIHBhZGRpbmcgKi9cbiAgcGFkZGluZzogMTZweDtcbiAgd2lkdGg6IDYwcHg7IC8qIGZvbnRzaXplICsgMiAqIHBhZGRpbmcgKi9cbn1cblxuLnJvdW5kLWljb24uc21hbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGhlaWdodDogMjJweDsgLyogZm9udHNpemUgKyAyICogcGFkZGluZyAqL1xuICBwYWRkaW5nOiA0cHg7XG4gIHdpZHRoOiAyMnB4OyAvKiBmb250c2l6ZSArIDIgKiBwYWRkaW5nICovXG59XG5cbi5tb3R0by1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmV2aWV3cyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnYXNzZXRzL2NoZXJyeS12YXJpYXRpb25zLmpwZycpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ucmV2aWV3cyAuZGFyay1iZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzUsIDU5LCA3MCwgLjkpO1xufVxuXG4ucmV2aWV3cyBoMiB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnJldmlld3MgaHIsXG4uc3Vic2NyaXB0aW9uIGhyIHtcbiAgYm9yZGVyLWNvbG9yOiAjY2NiMDkwO1xuICB3aWR0aDogNjAlO1xufVxuXG4uc3Vic2NyaXB0aW9uIC5zb2NpYWwge1xuICBtYXJnaW4tdG9wOiAtMTFweDtcbn1cblxuLnN1YnNjcmlwdGlvbiAuc29jaWFsLXdyYXAsXG4uc3Vic2NyaXB0aW9uIC5zb2NpYWwtd3JhcCA+IGRpdiA+IC5jb250YWluZXItZmx1aWQgPiAucm93IHtcbiAgcGFkZGluZy1ib3R0b206IDA7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuXG4uc3Vic2NyaXB0aW9uIGgyIHtcbiAgY29sb3I6ICNjY2IwOTA7XG59XG5cbi5zdWJzY3JpcHRpb24gLnJ1bGUge1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuXG4uc3Vic2NyaXB0aW9uIC5yb3cgLnJvdyBwIHtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc3Vic2NyaXB0aW9uIC5yb3cgLnJvdyBwIHNwYW4ubm9ybWFsLXdlaWdodCB7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbi5zdWJzY3JpcHRpb24gLnJvdyAucm93IHAgYSB7XG4gIGNvbG9yOiAjY2NiMDkwO1xufVxuXG4uc3Vic2NyaXB0aW9uIC5iZWZvcmUtZm9ybSxcbi5zdWJzY3JpcHRpb24gLnJvdyAucm93IHA6bGFzdC1vZi10eXBlIHtcbiAgcGFkZGluZy1ib3R0b206IDFlbTtcbn1cblxuLnN1YnNjcmlwdGlvbiBmb3JtIHtcbiAgcGFkZGluZy10b3A6IDFlbTtcbn1cblxuLnN1YnNjcmlwdGlvbiBmb3JtIGltZyB7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBib3JkZXI6IDA7XG59XG5cbi5yZXZpZXdzIC5xdW90ZXMge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5yZXZpZXctdXMge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4ucmV2aWV3LXVzIC5saW5rIHtcbiAgY29sb3I6ICM4MTUyNDE7XG59XG5cbi50aGFuay15b3Uge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4uZXJyb3Ige1xuICBkaXNwbGF5OiBub25lO1xuICBjb2xvcjogcmVkO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4ucmV2aWV3LWZvcm0ge1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4ucmV2aWV3LWZvcm0gbGFiZWwge1xuICBmb250LXdlaWdodDogMjAwO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5yZXZpZXctZm9ybSBwIHtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbi5yZXZpZXctZm9ybSBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzYjQ2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5yZXZpZXctZm9ybSBidXR0b246ZGlzYWJsZWQsXG4ucmV2aWV3LWZvcm0gYnV0dG9uW2Rpc2FibGVkXSB7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uc29jaWFsLXdyYXAgKyAubGlnaHQtYmcge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuLmZvb3RlciAucm91bmQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ODhlOWM7XG59XG5cbi5mb290ZXIgYSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM2MzYzNjM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5qdXN0aWZ5IHAge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uYnJpZWYtZGVzY3JpcHRpb24tZ2FwIHtcbiAgcGFkZGluZy1ib3R0b206IDh2dztcbn1cblxuLm5ld3NsZXR0ZXIgcCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICBmb250LXNpemU6IDE4cHhcbn1cblxuLmZvcm0tY29udHJvbCBpbnB1dCB7XG4gIGNvbG9yOiAjY2NiMDkwO1xufVxuXG4uaW5wdXQxIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5pbnB1dDIge1xuICBtYXJnaW46IDNweCAzcHggM3B4IDVweDtcbn1cblxuLmNvbnRhY3RzLFxuLmV4aGliaXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDF2dztcbn1cblxuLmV4aGliaXRpb24gc3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb250YWN0cyBhLFxuLmV4aGliaXRpb24gYSxcbi5jb250YWN0cyBhOmhvdmVyLFxuLmV4aGliaXRpb24gYTpob3Zlcixcbi5jb250YWN0cyBhOnZpc2l0ZWQsXG4uZXhoaWJpdGlvbiBhOnZpc2l0ZWQsXG4uY29udGFjdHMgYTphY3RpdmUsXG4uZXhoaWJpdGlvbiBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFjdHMge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY29udGFjdHMgPiAqLFxuLmV4aGliaXRpb24gPiAqIHtcbiAgcGFkZGluZy10b3A6IDJ2dztcbiAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmI7XG59XG5cbi5jb250YWN0cyA+IDpmaXJzdC1jaGlsZCxcbi5leGhpYml0aW9uID4gOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogMDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5hdGNiLWxpbmsge1xuICBwYWRkaW5nOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1kZWZhdWx0IHtcbiAgcGFkZGluZzogNHB4IDAgOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjNmQwO1xufVxuXG4vKiBNb2JsaWUgcG9ydHJhaXQsIGxhbmRzY2FwZSBhbmQgVGFibGV0IHBvcnRyYWl0ICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZm9vdGVyIHtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cblxuICAucm93IHtcbiAgICBwYWRkaW5nOiA0dncgMDtcbiAgfVxuXG4gIC5kYXJrLWJnIHtcbiAgICBwYWRkaW5nOiA2dncgMDtcbiAgfVxuXG4gIC5jb2wtbWQtNiBpbWcge1xuICAgIHBhZGRpbmctdG9wOiA4dnc7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XG4gIC5mb290ZXIgZGl2LnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICB9XG5cbiAgLmZvb3RlciBpLnNtYWxsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5yb3cubG9nby1yb3ctbWFyZ2luIHtcbiAgICBwYWRkaW5nLXRvcDogMnZ3O1xuICB9XG5cbiAgLnJvdy5tb3R0byB7XG4gICAgcGFkZGluZy10b3A6IDN2dztcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41dnc7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnJldmlld3MtcGFnZSAuc29jaWFsLXdyYXAsXG4gIC5tb2JpbGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY29udGFpbmVyLWZsdWlkIC5jb250YWluZXItZmx1aWQgPiAucm93Om5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBib2R5IHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gIH1cblxuICAubmF2YmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsZWZ0OiBpbmhlcml0O1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgLm5hdmJhci10b2dnbGUge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nLXRvcDogY2FsYyg3LjV2dyAtIDcuNXB4KTtcbiAgfVxuXG4gIC5uYXZiYXItYnJhbmQge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGhlaWdodDogaW5oZXJpdDtcbiAgfVxuXG4gIC5jb2xsYXBzZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAubmF2YmFyLW5hdiBsaSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuICB9XG5cbiAgLm5hdmJhci1uYXYgbGkgYSB7XG4gICAgYm9yZGVyOiBub25lO1xuICB9XG5cbiAgLm5hdmJhci1uYXYge1xuICAgIGxlZnQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIH1cblxuICAuZGFyay1iZyB7XG4gICAgcGFkZGluZzogMTB2dyAwO1xuICB9XG5cbiAgLnNvY2lhbCB7XG4gICAgbWFyZ2luLXRvcDogLTIwcHg7XG4gIH1cblxuICAuc3Vic2NyaXB0aW9uIC5zb2NpYWwge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gIH1cblxuICAucm91bmQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGhlaWdodDogNDBweDsgLyogZm9udHNpemUgKyAyICogcGFkZGluZyAqL1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDQwcHg7IC8qIGZvbnRzaXplICsgMiAqIHBhZGRpbmcgKi9cbiAgfVxuXG4gIC5ob21lLXBhZ2UgLm1vdHRvLW1vYmlsZSB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwIDAgNHZ3IDA7XG4gIH1cblxuICAuaG9tZS1wYWdlIC5tb3R0byxcbiAgLmhvbWUtcGFnZSAubW90dG8gKyBkaXYsXG4gIC5yZXZpZXdzLXBhZ2UgLnNvY2lhbCxcbiAgLmRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucmV2aWV3cy1wYWdlIC5yZXZpZXdzIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG5cbiAgLnJldmlld3MtcGFnZSBoMiB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICAucmV2aWV3cy1wYWdlIC5yZXZpZXdzIC5yb3cge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgLnJldmlld3MtcGFnZSAuZGFyay1iZyB7XG4gICAgcGFkZGluZzogNnZ3IDA7XG4gIH1cblxuICAuZm9vdGVyIGRpdi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5cbi5yb3cuZGFyay1iZy5ub3BhZGRpbmcsXG4ucm93Lm5vcGFkZGluZyxcbi5ub3BhZGRpbmcge1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubmVnYXRpdmUtbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogLTIwcHg7XG59XG5cbi5ydWxlIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLmxvZ28tcm93LW1hcmdpbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5uby1ib3R0b20tbWFyZ2luIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwge1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbn1cblxuYm9keSB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtcbn1cblxuaDEgaW1nIHtcbiAgd2lkdGg6IDgzLjMlO1xuICBtYXJnaW4tdG9wOiAydnc7XG59XG5cbmgyLFxuLm1vdHRvIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuaDIsIGgyIGEsIGgyIGE6aG92ZXIsIGgyIGE6YWN0aXZlLCBoMiBhOnZpc2l0ZWQge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjODE1MjQxO1xuICBmb250LXdlaWdodDogMjAwO1xufVxuXG5wIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaHIge1xuICAtbW96LWJvcmRlci1ib3R0b20tY29sb3JzOiBub25lO1xuICAtbW96LWJvcmRlci1pbWFnZTogbm9uZTtcbiAgLW1vei1ib3JkZXItbGVmdC1jb2xvcnM6IG5vbmU7XG4gIC1tb3otYm9yZGVyLXJpZ2h0LWNvbG9yczogbm9uZTtcbiAgLW1vei1ib3JkZXItdG9wLWNvbG9yczogbm9uZTtcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xuICBib3JkZXItc3R5bGU6IHNvbGlkIG5vbmU7XG4gIGJvcmRlci13aWR0aDogMXB4IDAgMCAwO1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogODMuMyU7XG59XG5cbmlucHV0W3R5cGU9Y2hlY2tib3hdICsgbGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5yb3cubmF2aWdhdGlvbiB7XG4gIHBhZGRpbmc6IDEuNXZ3IDAgMDtcbn1cblxuLnJvdyA+IHA6bm90KDpmaXJzdC1jaGlsZCkge1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuXG4ubmF2YmFyIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IC01MCU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy10b3A6IDI3cHg7XG59XG5cbi5uYXZiYXItYnJhbmQge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5uYXZiYXItYnJhbmQgPiBpbWcge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5uYXZiYXItbmF2IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MCU7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuZm9ybSB0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0gdGQge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG59XG5cbmZvcm0gc2VsZWN0IHtcbiAgY29sb3I6ICM0ZDRkNGQ7XG59XG5cbi5uYXZiYXIgLmljb24tYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5uYXZiYXItbmF2IGxpIGEge1xuICBjb2xvcjogIzIzM2I0NjtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIzM2I0NjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMCAxNXB4O1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLm5hdmJhci1uYXYgbGk6bGFzdC1jaGlsZCBhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbn1cblxuLm5hdmJhci1uYXYgbGkuYWN0aXZlIGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uYXZiYXItbmF2IGxpIGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMyMzNiNDY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLnJvdyB7XG4gIHBhZGRpbmc6IDR2dyAwO1xuICBjb2xvcjogIzRkNGQ0ZDtcbiAgbGluZS1oZWlnaHQ6IDEuMmVtO1xufVxuXG4ubGlnaHQtYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjNmQwO1xuICBjb2xvcjogIzIzM2I0Njtcbn1cblxuLmRhcmstYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMzYjQ2O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5saWdodC1iZyBociB7XG4gIGJvcmRlci1jb2xvcjogIzIzM2I0Njtcbn1cblxuLnNsaWRlc2hvdyBwIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uY3ljbGUtc2xpZGUge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG5cbi5zbGlkZXNob3cgcDpmaXJzdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYmJiO1xufVxuXG4ucXVvdGVzIC5jaXRhdGlvbiB7XG4gIGNvbG9yOiAjY2NiMDkwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uc29jaWFsIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIG1hcmdpbi10b3A6IC0zMHB4O1xufVxuXG4ucm91bmQtaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzODVmNzM7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI4cHg7XG4gIGhlaWdodDogNjBweDtcbiAgLyogZm9udHNpemUgKyAyICogcGFkZGluZyAqL1xuICBwYWRkaW5nOiAxNnB4O1xuICB3aWR0aDogNjBweDtcbiAgLyogZm9udHNpemUgKyAyICogcGFkZGluZyAqL1xufVxuXG4ucm91bmQtaWNvbi5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICAvKiBmb250c2l6ZSArIDIgKiBwYWRkaW5nICovXG4gIHBhZGRpbmc6IDRweDtcbiAgd2lkdGg6IDIycHg7XG4gIC8qIGZvbnRzaXplICsgMiAqIHBhZGRpbmcgKi9cbn1cblxuLm1vdHRvLW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5yZXZpZXdzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2NoZXJyeS12YXJpYXRpb25zLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnJldmlld3MgLmRhcmstYmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM1LCA1OSwgNzAsIDAuOSk7XG59XG5cbi5yZXZpZXdzIGgyIHtcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucmV2aWV3cyBocixcbi5zdWJzY3JpcHRpb24gaHIge1xuICBib3JkZXItY29sb3I6ICNjY2IwOTA7XG4gIHdpZHRoOiA2MCU7XG59XG5cbi5zdWJzY3JpcHRpb24gLnNvY2lhbCB7XG4gIG1hcmdpbi10b3A6IC0xMXB4O1xufVxuXG4uc3Vic2NyaXB0aW9uIC5zb2NpYWwtd3JhcCxcbi5zdWJzY3JpcHRpb24gLnNvY2lhbC13cmFwID4gZGl2ID4gLmNvbnRhaW5lci1mbHVpZCA+IC5yb3cge1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbi5zdWJzY3JpcHRpb24gaDIge1xuICBjb2xvcjogI2NjYjA5MDtcbn1cblxuLnN1YnNjcmlwdGlvbiAucnVsZSB7XG4gIHBhZGRpbmctdG9wOiAxZW07XG59XG5cbi5zdWJzY3JpcHRpb24gLnJvdyAucm93IHAge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdWJzY3JpcHRpb24gLnJvdyAucm93IHAgc3Bhbi5ub3JtYWwtd2VpZ2h0IHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnN1YnNjcmlwdGlvbiAucm93IC5yb3cgcCBhIHtcbiAgY29sb3I6ICNjY2IwOTA7XG59XG5cbi5zdWJzY3JpcHRpb24gLmJlZm9yZS1mb3JtLFxuLnN1YnNjcmlwdGlvbiAucm93IC5yb3cgcDpsYXN0LW9mLXR5cGUge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xufVxuXG4uc3Vic2NyaXB0aW9uIGZvcm0ge1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuXG4uc3Vic2NyaXB0aW9uIGZvcm0gaW1nIHtcbiAgd2lkdGg6IDFweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJvcmRlcjogMDtcbn1cblxuLnJldmlld3MgLnF1b3RlcyB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLnJldmlldy11cyB7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG5cbi5yZXZpZXctdXMgLmxpbmsge1xuICBjb2xvcjogIzgxNTI0MTtcbn1cblxuLnRoYW5rLXlvdSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG5cbi5lcnJvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGNvbG9yOiByZWQ7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG5cbi5yZXZpZXctZm9ybSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctYm90dG9tOiAxZW07XG59XG5cbi5yZXZpZXctZm9ybSBsYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnJldmlldy1mb3JtIHAge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLnJldmlldy1mb3JtIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMzNiNDY7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnJldmlldy1mb3JtIGJ1dHRvbjpkaXNhYmxlZCxcbi5yZXZpZXctZm9ybSBidXR0b25bZGlzYWJsZWRdIHtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zb2NpYWwtd3JhcCArIC5saWdodC1iZyB7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uZm9vdGVyIC5yb3VuZC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzc4OGU5Yztcbn1cblxuLmZvb3RlciBhIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzYzNjM2MztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmp1c3RpZnkgcCB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5cbi5icmllZi1kZXNjcmlwdGlvbi1nYXAge1xuICBwYWRkaW5nLWJvdHRvbTogOHZ3O1xufVxuXG4ubmV3c2xldHRlciBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmZvcm0tY29udHJvbCBpbnB1dCB7XG4gIGNvbG9yOiAjY2NiMDkwO1xufVxuXG4uaW5wdXQxIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5pbnB1dDIge1xuICBtYXJnaW46IDNweCAzcHggM3B4IDVweDtcbn1cblxuLmNvbnRhY3RzLFxuLmV4aGliaXRpb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDF2dztcbn1cblxuLmV4aGliaXRpb24gc3BhbiB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5jb250YWN0cyBhLFxuLmV4aGliaXRpb24gYSxcbi5jb250YWN0cyBhOmhvdmVyLFxuLmV4aGliaXRpb24gYTpob3Zlcixcbi5jb250YWN0cyBhOnZpc2l0ZWQsXG4uZXhoaWJpdGlvbiBhOnZpc2l0ZWQsXG4uY29udGFjdHMgYTphY3RpdmUsXG4uZXhoaWJpdGlvbiBhOmFjdGl2ZSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uY29udGFjdHMge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY29udGFjdHMgPiAqLFxuLmV4aGliaXRpb24gPiAqIHtcbiAgcGFkZGluZy10b3A6IDJ2dztcbiAgcGFkZGluZy1ib3R0b206IDN2dztcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNiYmI7XG59XG5cbi5jb250YWN0cyA+IDpmaXJzdC1jaGlsZCxcbi5leGhpYml0aW9uID4gOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcDogMDtcbn1cblxuLmNvcHlyaWdodCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0ZDRkNGQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5hdGNiLWxpbmsge1xuICBwYWRkaW5nOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xuICBjb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IGluaGVyaXQgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1kZWZhdWx0IHtcbiAgcGFkZGluZzogNHB4IDAgOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdjNmQwO1xufVxuXG4vKiBNb2JsaWUgcG9ydHJhaXQsIGxhbmRzY2FwZSBhbmQgVGFibGV0IHBvcnRyYWl0ICovXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuZm9vdGVyIHtcbiAgICBsaW5lLWhlaWdodDogMS41ZW07XG4gIH1cblxuICAucm93IHtcbiAgICBwYWRkaW5nOiA0dncgMDtcbiAgfVxuXG4gIC5kYXJrLWJnIHtcbiAgICBwYWRkaW5nOiA2dncgMDtcbiAgfVxuXG4gIC5jb2wtbWQtNiBpbWcge1xuICAgIHBhZGRpbmctdG9wOiA4dnc7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuZm9vdGVyIGRpdi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuXG4gIC5mb290ZXIgaS5zbWFsbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLnJvdy5sb2dvLXJvdy1tYXJnaW4ge1xuICAgIHBhZGRpbmctdG9wOiAydnc7XG4gIH1cblxuICAucm93Lm1vdHRvIHtcbiAgICBwYWRkaW5nLXRvcDogM3Z3O1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjV2dztcbiAgfVxufVxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnJldmlld3MtcGFnZSAuc29jaWFsLXdyYXAsXG4ubW9iaWxlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNvbnRhaW5lci1mbHVpZCAuY29udGFpbmVyLWZsdWlkID4gLnJvdzpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cbn1cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIGJvZHkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5uYXZiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IGluaGVyaXQ7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gIH1cblxuICAubmF2YmFyLXRvZ2dsZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmctdG9wOiBjYWxjKDcuNXZ3IC0gNy41cHgpO1xuICB9XG5cbiAgLm5hdmJhci1icmFuZCB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiBpbmhlcml0O1xuICB9XG5cbiAgLmNvbGxhcHNlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5uYXZiYXItbmF2IGxpIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDA7XG4gIH1cblxuICAubmF2YmFyLW5hdiBsaSBhIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuICAubmF2YmFyLW5hdiB7XG4gICAgbGVmdDogaW5oZXJpdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgfVxuXG4gIC5kYXJrLWJnIHtcbiAgICBwYWRkaW5nOiAxMHZ3IDA7XG4gIH1cblxuICAuc29jaWFsIHtcbiAgICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgfVxuXG4gIC5zdWJzY3JpcHRpb24gLnNvY2lhbCB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgfVxuXG4gIC5yb3VuZC1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIC8qIGZvbnRzaXplICsgMiAqIHBhZGRpbmcgKi9cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIC8qIGZvbnRzaXplICsgMiAqIHBhZGRpbmcgKi9cbiAgfVxuXG4gIC5ob21lLXBhZ2UgLm1vdHRvLW1vYmlsZSB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICBwYWRkaW5nOiAwIDAgNHZ3IDA7XG4gIH1cblxuICAuaG9tZS1wYWdlIC5tb3R0byxcbi5ob21lLXBhZ2UgLm1vdHRvICsgZGl2LFxuLnJldmlld3MtcGFnZSAuc29jaWFsLFxuLmRlc2t0b3Age1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAucmV2aWV3cy1wYWdlIC5yZXZpZXdzIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICB9XG5cbiAgLnJldmlld3MtcGFnZSBoMiB7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gIH1cblxuICAucmV2aWV3cy1wYWdlIC5yZXZpZXdzIC5yb3cge1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICB9XG5cbiAgLnJldmlld3MtcGFnZSAuZGFyay1iZyB7XG4gICAgcGFkZGluZzogNnZ3IDA7XG4gIH1cblxuICAuZm9vdGVyIGRpdi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ucm93LmRhcmstYmcubm9wYWRkaW5nLFxuLnJvdy5ub3BhZGRpbmcsXG4ubm9wYWRkaW5nIHtcbiAgcGFkZGluZzogMDtcbn1cblxuLm5lZ2F0aXZlLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IC0yMHB4O1xufVxuXG4ucnVsZSB7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5sb2dvLXJvdy1tYXJnaW4ge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ubm8tYm90dG9tLW1hcmdpbiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */", '', '']]

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/janoscsikos/Projects/ashleaf-nx/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../../node_modules/postcss-loader/src??embedded!../../../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles.scss */ "../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src/index.js?!../../node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/janoscsikos/Projects/ashleaf-nx/apps/ashleaf/src/styles.scss */"./src/styles.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map