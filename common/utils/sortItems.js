import moment from 'moment';

const sortItems = (items, path, order) => {
  return items.sort((a, b) => {
    if (path === 'createdAt') {
      return order === 'desc' ?
        new moment(b[path]).format('YYYYMMDD') - new moment(a[path]).format('YYYYMMDD') :
        new moment(a[path]).format('YYYYMMDD') - new moment(b[path]).format('YYYYMMDD');
    } else {
      return order === 'desc' ? b[path] - a[path] : a[path] - b[path];
    }
  });
};

export default sortItems;