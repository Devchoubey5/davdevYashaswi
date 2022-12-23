var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/skill-development', function(req, res) {
  res.render('skill-development/skill-development');
});
router.get('/yashaswi-institutes-of-technology', function(req, res) {
  res.render('skill-development/yashaswi-institutes-of-technology');
});
router.get('/yashaswi-academy-for-skills', function(req, res) {
  res.render('skill-development/yashaswi-academy-for-skills');
});
router.get('/Institute-of-skill-development', function(req, res) {
  res.render('skill-development/Institute-of-skill-development');
});
router.get('/skill-development-feed', function(req, res) {
  res.render('skill-development/skill-development-feed');
});
router.get('/skills-feed', function(req, res) {
  res.render('skill-development/skills-feed');
});
router.get('/management-institutes', function(req, res) {
  res.render('management-institutes/management-institutes');
});
router.get('/international-institute-of-management-science', function(req, res) {
  res.render('management-institutes/international-institute-of-management-science');
});
router.get('/feed', function(req, res) {
  res.render('management-institutes/feed');
});
router.get('/feed', function(req, res) {
  res.render('management-institutes/feed');
});
router.get('/government-projects', function(req, res) {
  res.render('government-projects/government-projects');
});
router.get('/talent-management', function(req, res) {
  res.render('talent-management/talent-management');
});
router.get('/Contractual-Manpower', function(req, res) {
  res.render('Contractual-Manpower/Contractual-Manpower');
});
router.get('/renal-healthcare', function(req, res) {
  res.render('renal-healthcare/renal-healthcare');
});
router.get('/training-development', function(req, res) {
  res.render('training-development/training-development');
});
router.get('/Staffing-Solution', function(req, res) {
  res.render('Staffing-Solution/Staffing-Solution');
});
router.get('/media', function(req, res) {
  res.render('media/media');
});
router.get('/careers', function(req, res) {
  res.render('careers/careers');
});
router.get('/contact-us', function(req, res) {
  res.render('contact-us/contact-us');
});
router.get('/branch-offices', function(req, res) {
  res.render('contact-us/branch-offices');
});
router.get('/comments', function(req, res) {
  res.render('comments/feed');
});
router.get('/medi-assure', function(req, res) {
  res.render('medi-assure/medi-assure');
});
router.get('/biomed-academy', function(req, res) {
  res.render('biomed-academy/biomed-academy');
});
router.get('/german-renal-care', function(req, res) {
  res.render('german-renal-care/german-renal-care');
});
router.get('/Career-List', function(req, res) {
  res.render('Admin/Career-List');
});
router.get('/Contact-List', function(req, res) {
  res.render('Admin/Contact-List');
});


module.exports = router;
