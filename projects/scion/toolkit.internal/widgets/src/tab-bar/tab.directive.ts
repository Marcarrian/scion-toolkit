/*
 * Copyright (c) 2018-2019 Swiss Federal Railways
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 *  SPDX-License-Identifier: EPL-2.0
 */

import { Directive, Input, TemplateRef } from '@angular/core';

/**
 * Use this directive to model a tab item for {SciTabBarComponent}.
 * The host element of this modelling directive must be a <ng-template>.
 *
 * ---
 * Example usage:
 *
 * <sci-tab-bar>
 *   <ng-template sciTab [label]="contact.name" *ngFor="let contact of contacts$ | async">
 *     <app-contact-list-item [contact]="contact"></app-contact-list-item>
 *   </ng-template>
 * </sci-tab-bar>
 */
@Directive({selector: 'ng-template[sciTab]'})
export class SciTabDirective {

  /**
   * Represents the title displayed in the tab.
   */
  @Input()
  public label: string;

  constructor(public readonly templateRef: TemplateRef<void>) {
  }
}
