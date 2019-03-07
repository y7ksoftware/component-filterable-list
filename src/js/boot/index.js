import Vue from 'vue';

import FilterableList from 'components/filterableList/FilterableList';
import FilterFieldText from 'components/filterableList/FilterFieldText';
import FilterFieldSelect from 'components/filterableList/FilterFieldSelect';
import FilterFieldHidden from 'components/filterableList/FilterFieldHidden';
import FilterFieldCheckbox from 'components/filterableList/FilterFieldCheckbox';
import FilterFieldButtonBar from 'components/filterableList/FilterFieldButtonBar';
import FilterFieldNavigationBar from 'components/filterableList/FilterFieldNavigationBar';


Vue.component('filterable-list', FilterableList);
Vue.component('filter-field-text', FilterFieldText);
Vue.component('filter-field-select', FilterFieldSelect);
Vue.component('filter-field-hidden', FilterFieldHidden);
Vue.component('filter-field-checkbox', FilterFieldCheckbox);
Vue.component('filter-field-button-bar', FilterFieldButtonBar);
Vue.component('filter-field-navigation-bar', FilterFieldNavigationBar);
