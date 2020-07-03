/*
 * Copyright (c) 2018-2019 Swiss Federal Railways
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 *  SPDX-License-Identifier: EPL-2.0
 */

import {
  AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, QueryList, TemplateRef
} from '@angular/core';
import { SciTabDirective } from './tab.directive';

@Component({
  selector: 'sci-tab-bar',
  templateUrl: './tab-bar.component.html',
  styleUrls: ['./tab-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SciTabBarComponent implements AfterContentInit {

  @ContentChildren(SciTabDirective)
  public tabBarItems: QueryList<SciTabDirective>;
  public selectedIndex = 0;

  constructor(private _cdRef: ChangeDetectorRef) {
  }

  public ngAfterContentInit(): void {
    if (this.tabBarItems.length === 0) {
      throw new Error('[SciTabBarComponent]: at least one ng-template with sciTab directive has to be provided.');
    }
  }

  /**
   * Selects the tab at the given index.
   */
  public selectTab(tabIndex: number) {
    this.selectedIndex = tabIndex;
    this._cdRef.markForCheck();
  }

  /**
   * Returns the template at the given index.
   */
  public template(index: number): TemplateRef<void> {
    return this.tabBarItems.toArray()[index].templateRef;
  }
}
