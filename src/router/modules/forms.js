// Form pages routes
export default [
  {
    path: 'forms/elements',
    name: 'FormElementsPage',
    component: () => import('@/pages/Forms/Elements/Elements.vue')
  },
  {
    path: 'forms/validation',
    name: 'FormValidationPage',
    component: () => import('@/pages/Forms/Validation/Validation.vue')
  },
  {
    path: 'forms/wizard',
    name: 'FormWizardPage',
    component: () => import('@/pages/Forms/Wizard/Wizard.vue')
  }
]
