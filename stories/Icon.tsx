import {withInfo} from '@storybook/addon-info';
import {storiesOf} from '@storybook/react';
import React from 'react';
import {Icon} from '../dist/';

const icons = [
  'drag',
  'prize',
  'prize2',
  'back',
  'deadline',
  'doc_file',
  'edit',
  'finance',
  'follow',
  'jpg_file',
  'linkedin',
  'more',
  'participate',
  'pdf_file',
  'result',
  'sent',
  'share_result',
  'vote_no',
  'vote_yes',
  'vote_list',
  'xls_file',
  'xls_file',
  'pin',
  'youtube',
  'search',
  'tw',
  'fb',
  'comment',
  'arrow',
  'clock',
  'wallet',
  'chevron-thin-up',
  'chevron-thin-right',
  'chevron-thin-left',
  'chevron-thin-down',
  'telegram',
  'reddit',
  'arrow-right-alt',
  'arrow-left-alt',
  'envelope',
  'link',
  'follow_fill',
  'follow_icn',
  'deadline_fill',
  'check',
  'github',
  'instagram',
  'fb_simple',
  'info',
  'indeterminate_check_box',
  'check_circle',
  'check_box_outline_blank',
  'check_box',
  'check_thin',
  'edit_alt',
  'trash',
  'cal',
  'cancel',
  'in_process',
  'in_process_simple',
  'fail',
  'lykke',
  'close',
  'cancel_round',
  'prev_transaction',
  'next_transaction',
  'arrow_right_big',
  'arrow_left_big',
  'vote_list',
  'copy',
  'polygon',
  'polygon_fill',
  'download',
  'help_outline',
  'rename_icn',
  'star_stroke',
  'star',
  'view_icn',
  'arrow_right_circle',
  'notificaton',
  'help_outline',
  'save_as_draft',
  'add_circle',
  'add',
  'qr',
  'vk',
  'move_to',
  'move_to_thin',
  'exit',
  'settings',
  'finance_alt',
  'email',
  'lock',
  'actions',
  'qr_alt',
  'slack',
  'copy_thin',
  'done',
  'recycle',
  'reverse',
  'show_password',
  'hide_password',
  'arrow_expand',
  'upload',
  'photo',
  'telegram_dev',
  'warning_icn',
  'upgrade_icn',
  'plastic_card',
  'activate',
  'block',
  'check_small',
  'pay',
  'show_pin',
  'unblock',
  'virtual_card',
  'services',
  'location',
  'download_alt'
];

storiesOf('Icon', module).add(
  'overview',
  withInfo(`
    <h3>Props:</h3>

    ~~~javascript
    interface IconProps {
      className?: string;
      type: string;
    }
    ~~~
    `)(() => (
    <div className="container">
      <div className="row">
        <div className="col-md-6 automargin">
          {icons.map(icon => (
            <label key={icon} title={icon}>
              <Icon type={icon} />
            </label>
          ))}
        </div>
      </div>
    </div>
  ))
);
