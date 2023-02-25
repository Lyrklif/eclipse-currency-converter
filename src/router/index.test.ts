import { expect, describe, it, beforeEach } from 'vitest'
import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';

describe('Router', () => {
  it('should create a router', () => {
    const router = createRouter({
      history: createWebHashHistory(),
      routes: [
        {
          path: "/",
          name: "home",
          component: HomeView,
        },
        {
          path: "/converter",
          name: "converter",
          component: () => import("../views/ConverterView.vue"),
          props: true
        },
      ],
    });
    expect(router).to.be.an('object');
  });
});



// Create a test suite 
describe('Router', () => {
  let router: any;

  // Before each test, create the router 
  beforeEach(() => {
    router = createRouter({
      history: createWebHashHistory(),
      routes: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
        {
          path: '/converter',
          name: 'converter',
          component: () => import('../views/ConverterView.vue'),
          props: true
        },
      ],
    });
  });

  // Test for the router's existence 
  it('should exist', () => {
    expect(router).to.exist;
  });

  // Test for the correct routes 
  it('should have the correct routes', () => {
    expect(router.options.routes).to.have.lengthOf(2);
    expect(router.options.routes[0]).to.have.property('name', 'home');
    expect(router.options.routes[1]).to.have.property('name', 'converter');
  });
});