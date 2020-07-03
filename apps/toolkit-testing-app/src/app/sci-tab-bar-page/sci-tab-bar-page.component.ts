/*
 * Copyright (c) 2018-2019 Swiss Federal Railways
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 *  SPDX-License-Identifier: EPL-2.0
 */

import { Component } from '@angular/core';

@Component({
  selector: 'sci-sci-tab-bar-page',
  templateUrl: './sci-tab-bar-page.component.html',
  styleUrls: ['./sci-tab-bar-page.component.scss']
})
export class SciTabBarPageComponent {

  public tabs: Tab[] = [
    {label: 'SCION', content: 'SCION provides fundamental building blocks for implementing a microfrontend architecture and facilitates the development of Angular web applications that require a complex workbench layout of multiple views and windows.'},
    {label: 'SCION Microfrontend Platform', content: 'SCION Microfrontend Platform is a TypeScript-based open-source library that helps to implement a microfrontend architecture using iframes.'},
    {label: 'SCION Workbench', content: 'SCION Workbench helps to build multi-view web applications and integrates separate micro frontends into a consistent rich web application. Views are shown within tabs which can be flexibly arranged and dragged around by the user.'},
    {label: 'SCION Toolkit', content: 'SCION Toolkit is a collection of UI components and utilities designed primarily for use in SCION libraries and their demo and test applications.'},
    {label: 'SCION Toolkit INTERNAL', content: 'SCION Toolkit INTERNAL is a collection of UI components and utilities designed exclusively for use in SCION applications.'},
    {label: 'Angular', content: 'Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.'},
    {label: 'Angular CDK', content: 'The Component Dev Kit (CDK) is a set of tools that implement common interaction patterns whilst being unopinionated about their presentation.'},
    {label: 'Angular Material', content: 'Angular Material comprises a range of components which implement common interaction patterns according to the Material Design specification.'},
    {label: 'Angular Schematics', content: 'A schematic is a template-based code generator that supports complex logic. It is a set of instructions for transforming a software project by generating or modifying code.'},
    {label: 'Angular Google Maps Component', content: 'Angular components built on top of the Google Maps JavaScript API.'},
    {label: 'Angular Youtube Component', content: 'Angular component built on top of the YouTube Player API.'},
  ];

}

interface Tab {
  label: string;
  content: string;
}
