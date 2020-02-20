import React, { useEffect } from 'react';
import Scroll from 'react-scroll';

import { ItemsContainer, Main, PaginationWrapper } from '../../styles/ItemsStyles';
import Pagination from '../../common/styled/Pagination';
import Breadcrumb from '../../common/comps/Breadcrumb';
import SidebarSection from './SidebarSection';
import GridItemsSection from './GridItemsSection';
import useFetchData from '../../common/hooks/useFetchData';
import useManageItems from './manageAndPaginateItems/useManageItems';
import { capitalizeFirstLetter } from '../../common/utils/caseLetterMethods';
import Spinner from '../../common/comps/Spinner';
import withErrorHandler from '../../common/hoc/withErrorHandler';
import useDefaultFilter from '../../common/hooks/useDefaultFilter';

function Items() {
  const {apiEndpoint, itemsFilter} = useDefaultFilter();

  useEffect(() => {
    const scroll = Scroll.animateScroll;
    const scrollToTop = () => scroll.scrollTo(100, {smooth: true, duration: 1500,});
    scrollToTop();
  }, []);


  const breadcrumbOptions = [
    { title: 'Home', href: '/' },
    { title: itemsFilter }
  ];

  const { result: initialItems } = useFetchData(apiEndpoint);
  const {
    handleFilterItems, setSortOptions, handleCategoryFilter,
    handleBrandFilter, sortedItems, renderedItems,
    handlePageChange, pageSize, minValue,
    maxValue, currentPage
  } = useManageItems(initialItems);

  if(!renderedItems) return <Spinner/>;

  return (
    <ItemsContainer>
      <Breadcrumb pages={breadcrumbOptions}/>
      <Main>
        <SidebarSection
          onFilter={filters => handleFilterItems(filters)}
          onCategoryFilter={filter => handleCategoryFilter(filter)}
          onBrandFilter={filter => handleBrandFilter(filter)}
        />
        <GridItemsSection
          onSort={setSortOptions}
          items={sortedItems || renderedItems}
          minValue={minValue}
          maxValue={maxValue}/>
        <PaginationWrapper>
          <Pagination defaultCurrent={1}
                      current={currentPage}
                      pageSize={pageSize}
                      total={renderedItems.length}
                      onChange={handlePageChange}/>
        </PaginationWrapper>
      </Main>
    </ItemsContainer>
  );
}

export default withErrorHandler(Items);
