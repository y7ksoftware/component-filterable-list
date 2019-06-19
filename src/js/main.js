import Vue from 'vue';

import _FilterableList from './components/FilterableList';
import _FilterFieldText from './components/FilterFieldText';
import _FilterFieldSelect from './components/FilterFieldSelect';
import _FilterFieldHidden from './components/FilterFieldHidden';
import _FilterFieldCheckbox from './components/FilterFieldCheckbox';
import _FilterFieldButtonBar from './components/FilterFieldButtonBar';
import _FilterFieldNavigationBar from './components/FilterFieldNavigationBar';
import _FilterFieldMixin from './components/FilterFieldMixin';

export default {
    registerGlobally: function() {
        Vue.component('filterable-list', _FilterableList);
        Vue.component('filter-field-text', _FilterFieldText);
        Vue.component('filter-field-select', _FilterFieldSelect);
        Vue.component('filter-field-hidden', _FilterFieldHidden);
        Vue.component('filter-field-checkbox', _FilterFieldCheckbox);
        Vue.component('filter-field-button-bar', _FilterFieldButtonBar);
        Vue.component('filter-field-navigation-bar', _FilterFieldNavigationBar);
    },
};

export const FilterableList = _FilterableList;
export const FilterFieldText = _FilterFieldText;
export const FilterFieldSelect = _FilterFieldSelect;
export const FilterFieldHidden = _FilterFieldHidden;
export const FilterFieldCheckbox = _FilterFieldCheckbox;
export const FilterFieldButtonBar = _FilterFieldButtonBar;
export const FilterFieldNavigationBar = _FilterFieldNavigationBar;
export const FilterFieldMixin = _FilterFieldMixin;
