
describe('BBox', function() {
  'use strict';

  var window, document, pageDone;

  beforeAll(function(beforeDone) {
    loadPage('spec/bbox.html', function(pageWindow, pageDocument, pageBody, done) {
      window = pageWindow;
      document = pageDocument;
      pageDone = done;
      beforeDone();
    }, 'BBox');
  });

  afterAll(function() {
    pageDone();
  });

  it('keeps original bbox if possible', function() {
    var draggable, element, orgBBox, curBBox;

    element = document.getElementById('elm1');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 0, top: 0, x: 0, y: 0, width: 300, height: 20, right: 300, bottom: 20});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    expect(curBBox).toEqual(orgBBox);
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: 0});
    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('');
    expect(element.style.left).toBe('0px');
    expect(element.style.top).toBe('0px');

    element = document.getElementById('elm2');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 0, top: 30, x: 0, y: 30, width: 300, height: 26, right: 300, bottom: 56});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    expect(curBBox).toEqual(orgBBox);
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: 0});
    expect(element.style.width).toBe('294px');
    expect(element.style.height).toBe('');
    expect(element.style.left).toBe('0px');
    expect(element.style.top).toBe('30px');

    element = document.getElementById('elm3');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 0, top: 60, x: 0, y: 60, width: 300, height: 26, right: 300, bottom: 86});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    expect(curBBox).toEqual(orgBBox);
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: 0});
    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('');
    expect(element.style.left).toBe('0px');
    expect(element.style.top).toBe('60px');

    element = document.getElementById('elm4');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 0, top: 120, x: 0, y: 120, width: 300, height: 30, right: 300, bottom: 150});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    expect(curBBox).toEqual(orgBBox);
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: 0});
    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('30px');
    expect(element.style.left).toBe('0px');
    expect(element.style.top).toBe('120px');

    element = document.getElementById('elm5');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 0, top: 170, x: 0, y: 170, width: 306, height: 36, right: 306, bottom: 206});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    expect(curBBox).toEqual(orgBBox);
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: 0});
    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('30px');
    expect(element.style.left).toBe('0px');
    expect(element.style.top).toBe('170px');

    element = document.getElementById('elm6');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 0, top: 220, x: 0, y: 220, width: 300, height: 30, right: 300, bottom: 250});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    expect(curBBox).toEqual(orgBBox);
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: 0});
    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('30px');
    expect(element.style.left).toBe('0px');
    expect(element.style.top).toBe('220px');

    element = document.getElementById('elm7');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 0, top: 90, x: 0, y: 90, width: 300, height: 40, right: 300, bottom: 130});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    expect(curBBox).toEqual(orgBBox);
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: 0});
    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('');
    expect(element.style.left).toBe('0px');
    expect(element.style.top).toBe('90px');

    element = document.getElementById('elm8');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 0, top: 270, x: 0, y: 270, width: 300, height: 30, right: 300, bottom: 300});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    expect(curBBox).toEqual(orgBBox);
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: -270});
    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('30px');
    expect(element.style.left).toBe('0px');
    expect(element.style.top).toBe('0px');

    element = document.getElementById('elm9');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 21, top: 341, x: 21, y: 341, width: 300, height: 30, right: 321, bottom: 371});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    // containment height: 50px -> maxTop: 20
    expect(curBBox).toEqual({left: 21, top: 340, x: 21, y: 340, width: 300, height: 30, right: 321, bottom: 370});
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: -320});
    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('30px');
    expect(element.style.left).toBe('21px');
    expect(element.style.top).toBe('20px'); // not `21px` because maxTop is 20

    element = document.getElementById('elm10');
    orgBBox = window.getBBox(element);
    expect(orgBBox).toEqual({left: 22, top: 392, x: 22, y: 392, width: 300, height: 30, right: 322, bottom: 422});
    draggable = new window.PlainDraggable(element);
    curBBox = window.getBBox(element);
    expect(curBBox).toEqual(orgBBox);
    expect(window.insProps[draggable._id].offset).toEqual({left: 0, top: -370});
    expect(element.style.width).toBe('300px');
    expect(element.style.height).toBe('30px');
    expect(element.style.left).toBe('22px');
    expect(element.style.top).toBe('22px');
  });

  it('gets offset by document', function() {
    var iWindow = document.getElementById('iframe').contentWindow,
      iDocument = iWindow.document, iBody = iDocument.body,
      draggable, element;

    iDocument.getElementById('parent').style.position = 'relative';
    element = iDocument.getElementById('elm1');

    iBody.style.margin = iBody.style.borderWidth = iBody.style.padding = '0';
    draggable = new iWindow.PlainDraggable(element);
    expect(iWindow.insProps[draggable._id].offset).toEqual({left: 0, top: 0});

    iBody.style.borderStyle = 'solid';
    iBody.style.marginLeft = '1px';
    iBody.style.marginTop = '2px';
    iBody.style.borderLeftWidth = '4px';
    iBody.style.borderTopWidth = '8px';
    iBody.style.paddingLeft = '16px';
    iBody.style.paddingTop = '32px';
    draggable = new iWindow.PlainDraggable(element);
    console.log(iWindow.insProps[draggable._id].offset);
    expect(iWindow.insProps[draggable._id].offset).toEqual({left: -21, top: -42});
  });

});
