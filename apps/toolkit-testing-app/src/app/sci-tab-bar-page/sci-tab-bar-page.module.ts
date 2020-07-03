/*
 * Copyright (c) 2018-2019 Swiss Federal Railways
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 *  SPDX-License-Identifier: EPL-2.0
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SciTabBarPageComponent } from './sci-tab-bar-page.component';
import { RouterModule } from '@angular/router';
import { SciTabBarModule } from '@scion/toolkit.internal/widgets';

const routes = [
  {path: '', component: SciTabBarPageComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SciTabBarModule,
  ],
  declarations: [
    SciTabBarPageComponent,
  ],
})
export class SciTabBarPageModule {
}
