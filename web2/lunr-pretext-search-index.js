var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "5678",
  "level": "1",
  "url": "#5678",
  "type": "Article",
  "number": "",
  "title": "MATH # Hands-On, Grades Up",
  "body": "  MATH # Hands-On, Grades Up   For workspace between exercises, print this worksheet or download to your device by clicking the printer icon.    Session #2 (Sections #-#)  Directions:    Getting Warmed Up and in the Right Mindset    Problem 1      Problem 2      Problem 3      Let Us Get Our Hands On    Problem 1      Problem 2 with multiple parts.     Problem 2, part 1      Problem 2, part 2       Problem 3      Now Grades Go Up    Problem 1      Problem 2      Problem 3 with multiple choice   choice 1    choice 2    choice 3    choice 4         "
},
{
  "id": "5678-3-3-2",
  "level": "2",
  "url": "#5678-3-3-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Problem 1   "
},
{
  "id": "5678-3-3-3",
  "level": "2",
  "url": "#5678-3-3-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Problem 2   "
},
{
  "id": "5678-3-3-4",
  "level": "2",
  "url": "#5678-3-3-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Problem 3   "
},
{
  "id": "5678-3-4-2",
  "level": "2",
  "url": "#5678-3-4-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Problem 1   "
},
{
  "id": "5678-3-4-3",
  "level": "2",
  "url": "#5678-3-4-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Problem 2 with multiple parts.     Problem 2, part 1      Problem 2, part 2    "
},
{
  "id": "5678-3-4-4",
  "level": "2",
  "url": "#5678-3-4-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Problem 3   "
},
{
  "id": "5678-3-5-2",
  "level": "2",
  "url": "#5678-3-5-2",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Problem 1   "
},
{
  "id": "5678-3-5-3",
  "level": "2",
  "url": "#5678-3-5-3",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  Problem 2   "
},
{
  "id": "5678-3-5-4",
  "level": "2",
  "url": "#5678-3-5-4",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  Problem 3 with multiple choice   choice 1    choice 2    choice 3    choice 4      "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
