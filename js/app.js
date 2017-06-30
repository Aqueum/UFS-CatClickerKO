var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Tabby');
    this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
    this.imgAttribution = ko.observable('https://www.flickr.com');
    this.currentlevel = ko.observable(0);

    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };

    var levels = { 0:"unborn", 1:"newborn", 3:"toddler", 5:"child", 13:"teenager", 20:"adult", 40:"experienced"}

    this.level = ko.computed(function() {
        if (levels[this.clickCount()]) {
            this.currentlevel = levels[this.clickCount()]
        }
        return this.currentlevel
    }, this);
}

ko.applyBindings(new ViewModel());