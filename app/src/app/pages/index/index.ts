import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageComponent } from '../../../stories/page.component';

@Component({
  selector: 'app-index-page',
  imports: [PageComponent],
  template: '<storybook-page [showHeader]="false"></storybook-page>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexPage {}
