import React from 'react';
import { Breadcrumb } from 'antd';
import Link from 'next/link';

function BreadcrumbComp({ pages }) {

  return (
    <Breadcrumb>
      {pages.length !== 0 && pages.map(({ href, queryObj, title }) => href ?
          <Breadcrumb.Item key={title}>
            <Link href={{ pathname: href, query: queryObj }}>
              <a>{title}</a>
            </Link>
          </Breadcrumb.Item> :
          <Breadcrumb.Item key={title}>
            {title}
          </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}

export default BreadcrumbComp;