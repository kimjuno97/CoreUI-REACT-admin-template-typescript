import React from 'react';
import { CLink } from '@coreui/react';
import { CLinkProps } from '@coreui/react/dist/components/link/CLink';

interface DocsLinkProperty extends CLinkProps {
  href?: string;
  text?: string;
}

export default React.memo(function DocsLink(props: DocsLinkProperty) {
  const { href, name, text, ...rest } = props;

  const _href = name ? `https://coreui.io/react/docs/components/${name}` : href;

  return (
    <div className="float-end">
      <CLink {...rest} href={_href} rel="noreferrer noopener" target="_blank" className="card-header-action">
        <small className="text-medium-emphasis">{text || 'docs'}</small>
      </CLink>
    </div>
  );
});
