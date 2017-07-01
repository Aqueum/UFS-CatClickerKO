var cats = [{
    name:       "D9T",
    imgSrc:     "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/CatD9T.jpg/1024px-CatD9T.jpg",
    credit:     "By Shaun Greiner (CAT D9T) [CC BY-SA 2.0 (http://creativecommons.org/licenses/by-sa/2.0)], via Wikimedia Commons",
    creditURL:  "https://commons.wikimedia.org/wiki/File%3ACatD9T.jpg",
    clickCount:   0,
    currentlevel: 0,
    nicknames:  ['cat', 'just a cat', 'mog']
},{
    name:       "777D",
    imgSrc:     "https://upload.wikimedia.org/wikipedia/commons/1/15/Caterpillar_777D.jpg",
    credit:     "By Jo Mateix (Own work) [Public domain], via Wikimedia Commons",
    creditURL:  "https://commons.wikimedia.org/wiki/File%3ACaterpillar_777D.jpg",
    clickCount:   0,
    currentlevel: 0,
    nicknames:  ['cat', 'just a cat', 'mog']
},{
    name:       "323D",
    imgSrc:     "https://upload.wikimedia.org/wikipedia/commons/4/40/Sz%C3%A9ll_K%C3%A1lm%C3%A1n_t%C3%A9r_-_2015.04.10_%281%29.JPG",
    credit:     "By Derzsi Elekes Andor (Own work) [CC BY-SA 4.0 (http://creativecommons.org/licenses/by-sa/4.0)], via Wikimedia Commons",
    creditURL:  "https://commons.wikimedia.org/wiki/File%3ASz%C3%A9ll_K%C3%A1lm%C3%A1n_t%C3%A9r_-_2015.04.10_(1).JPG",
    clickCount:   0,
    currentlevel: 0,
    nicknames:  ['cat', 'just a cat', 'mog']
},{
    name:       "350D",
    imgSrc:     "https://upload.wikimedia.org/wikipedia/commons/d/d1/Caterpillar_D350D.jpg",
    credit:     "By Bidgee (Own work) [CC BY 3.0 (http://creativecommons.org/licenses/by/3.0)], via Wikimedia Commons",
    creditURL:  "https://commons.wikimedia.org/wiki/File%3ACaterpillar_D350D.jpg",
    clickCount:   0,
    currentlevel: 0,
    nicknames:  ['cat', 'just a cat', 'mog']
},{
    name:       "365B",
    imgSrc:     "https://upload.wikimedia.org/wikipedia/commons/1/1b/Hydraulicke_demolicni_nuzky_na_podvozku_CAT_330.jpg",
    credit:     "By Michal Maňas [CC BY-SA 2.5 (http://creativecommons.org/licenses/by-sa/2.5)], via Wikimedia Commons",
    creditURL:  "https://commons.wikimedia.org/wiki/File%3AHydraulicke_demolicni_nuzky_na_podvozku_CAT_330.jpg",
    clickCount:   0,
    currentlevel: 0,
    nicknames:  ['cat', 'just a cat', 'mog']
}];

var Cat = function(data) {
    this.clickCount = ko.observable(data.clickCount);
    this.fudge = ko.observable(data.fudge)
    this.name = ko.observable(data.name);
    this.imgSrc = ko.observable(data.imgSrc);
    this.credit = ko.observable(data.imgAttribution);
    this.currentlevel = ko.observable(data.currentlevel);
    this.nicknames = ko.observableArray(data.nicknames);

    var levels = { 0:"unborn", 1:"newborn", 3:"toddler", 5:"child", 13:"teenager", 20:"adult", 40:"experienced"}

    this.level = ko.computed(function() {
        if (levels[this.clickCount()]) {
            this.currentlevel = levels[this.clickCount()]
        }
        return this.currentlevel
    }, this);
}

var ViewModel = function() {
    var self = this;

    this.catlist = ko.observableArray([]);

    cats.forEach(function(catItem){
        self.catlist.push( new Cat(catItem));
    });

    this.currentCat = ko.observable( this.catlist()[0]);

    this.selectCat = function(clickedCat) {
        self.currentCat(clickedCat);
    };

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());