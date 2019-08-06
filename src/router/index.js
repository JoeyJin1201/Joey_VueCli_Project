import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// 官方元件

import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';
import button from '@/components/pages/button';
import child1 from '@/components/pages/child1';
import child2 from '@/components/pages/child2';
import child3 from '@/components/pages/child3';
// 自訂的分頁元件

export default new VueRouter({
  routes: [
    {
      name: '首頁', // 元件呈現的名稱
      path: '/index', // 對應的虛擬路徑
      component: Home, // 對應的元件
    },
    {
      name: '分頁', // 元件呈現的名稱
      path: '/page', // 對應的虛擬路徑
      component: Page, // 對應的元件
      children: [
        {
          name: 'Card 1',
          path: '',
          component: child1,
        },
        {
          name: 'Card 2',
          path: 'child2',
          component: child2,
        },
        {
          name: 'Card 3',
          path: 'child3',
          component: child3,
        },
      ],
    },
    {
      name: '按鈕', // 元件呈現的名稱
      path: '/button', // 對應的虛擬路徑
      component: button, // 對應的元件
    },
  ],
});