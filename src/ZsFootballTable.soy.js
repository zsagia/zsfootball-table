/* jshint ignore:start */
import Component from 'metal-component/src/Component';
import Soy from 'metal-soy/src/Soy';
var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from ZsFootballTable.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace ZsFootballTable.
 * @public
 */

goog.module('ZsFootballTable.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'id', opt_data.id,
      'class', 'zsfootball-table');
    $renderRange_({maxValue: opt_data.rounds.length, value: opt_data.selectedRound}, null, opt_ijData);
    $renderTable_(soy.$$augmentMap(opt_data.rounds, {columnConfig: opt_data.columnConfig, columns: opt_data.tableColumnNames, columnClasses: opt_data.tableColumnClassNames, elementClasses: opt_data.elementClasses, value: opt_data.rounds[opt_data.selectedRound - 1]}), null, opt_ijData);
  ie_close('div');
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'ZsFootballTable.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderTable_(opt_data, opt_ignored, opt_ijData) {
  ie_open('table', null, null,
      'class', 'table' + (opt_data.elementClasses ? ' ' + opt_data.elementClasses : ''));
    ie_open('thead');
      ie_open('tr');
        var keyList28 = soy.$$getMapKeys(opt_data.columnConfig);
        var keyListLen28 = keyList28.length;
        for (var keyIndex28 = 0; keyIndex28 < keyListLen28; keyIndex28++) {
          var keyData28 = keyList28[keyIndex28];
          var columnIndex__soy20 = keyIndex28;
          if (opt_data.columnConfig[keyData28]) {
            ie_open('th', null, null,
                'class', 'col-' + opt_data.columnClasses[columnIndex__soy20]);
              ie_open('span', null, null,
                  'class', 'table-column');
                itext((goog.asserts.assert((opt_data.columns[keyData28]) != null), opt_data.columns[keyData28]));
              ie_close('span');
            ie_close('th');
          }
        }
      ie_close('tr');
    ie_close('thead');
    ie_open('tbody');
      var arrayRowValueList37 = opt_data.value;
      var arrayRowValueListLen37 = arrayRowValueList37.length;
      for (var arrayRowValueIndex37 = 0; arrayRowValueIndex37 < arrayRowValueListLen37; arrayRowValueIndex37++) {
        var arrayRowValueData37 = arrayRowValueList37[arrayRowValueIndex37];
        var rowIndex__soy31 = arrayRowValueIndex37 + 1;
        $renderRow_({arrayRowValue: arrayRowValueData37, columnClasses: opt_data.columnClasses, columnConfig: opt_data.columnConfig, rowIndex: rowIndex__soy31}, null, opt_ijData);
      }
    ie_close('tbody');
  ie_close('table');
}
exports.renderTable_ = $renderTable_;
if (goog.DEBUG) {
  $renderTable_.soyTemplateName = 'ZsFootballTable.renderTable_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderRow_(opt_data, opt_ignored, opt_ijData) {
  ie_open('tr', null, null,
      'class', 'row-' + opt_data.rowIndex);
    var keyList51 = soy.$$getMapKeys(opt_data.arrayRowValue);
    var keyListLen51 = keyList51.length;
    for (var keyIndex51 = 0; keyIndex51 < keyListLen51; keyIndex51++) {
      var keyData51 = keyList51[keyIndex51];
      if (opt_data.columnConfig[keyData51]) {
        ie_open('td', null, null,
            'class', opt_data.columnClasses[keyIndex51]);
          itext((goog.asserts.assert((opt_data.arrayRowValue[keyData51]) != null), opt_data.arrayRowValue[keyData51]));
        ie_close('td');
      }
    }
  ie_close('tr');
}
exports.renderRow_ = $renderRow_;
if (goog.DEBUG) {
  $renderRow_.soyTemplateName = 'ZsFootballTable.renderRow_';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $renderRange_(opt_data, opt_ignored, opt_ijData) {
  ie_open('input', null, null,
      'data-onchange', 'changeTableContents',
      'id', 'round',
      'min', '1',
      'max', opt_data.maxValue,
      'type', 'range',
      'value', opt_data.value);
  ie_close('input');
}
exports.renderRange_ = $renderRange_;
if (goog.DEBUG) {
  $renderRange_.soyTemplateName = 'ZsFootballTable.renderRange_';
}

exports.render.params = ["elementClasses","columnConfig","id","rounds","selectedRound","tableColumnNames","tableColumnClassNames"];
exports.render.types = {"elementClasses":"any","columnConfig":"any","id":"any","rounds":"any","selectedRound":"any","tableColumnNames":"any","tableColumnClassNames":"any"};
exports.renderTable_.params = ["columnConfig","columns","columnClasses","elementClasses","value"];
exports.renderTable_.types = {"columnConfig":"any","columns":"any","columnClasses":"any","elementClasses":"any","value":"any"};
exports.renderRow_.params = ["arrayRowValue","columnConfig","columnClasses","rowIndex"];
exports.renderRow_.types = {"arrayRowValue":"any","columnConfig":"any","columnClasses":"any","rowIndex":"any"};
exports.renderRange_.params = ["maxValue","value"];
exports.renderRange_.types = {"maxValue":"any","value":"any"};
templates = exports;
return exports;

});

class ZsFootballTable extends Component {}
Soy.register(ZsFootballTable, templates);
export { ZsFootballTable, templates };
export default templates;
/* jshint ignore:end */
