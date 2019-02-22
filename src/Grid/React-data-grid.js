import React from 'react';
import ReactDataGrid from 'react-data-grid';

const columns = [
  { key: 'id', name: 'ID' },
  { key: 'name', name: 'Name' },
  { key: 'phonenumber', name: 'Phone Number' },
  { key: 'amount', name: 'Amount' } ,
  { key: 'phonenumber', name: 'Phone Number' }  ];

const rows = [{id: 0, title: 'row1', count: 20}, {id: 1, title: 'row1', count: 40}, {id: 2, title: 'row1', count: 60}];

class Grid extends React.Component {

  render () {
    return (
      <div class="col-xs-12 col-sm-6 col-md-8">
            <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={3}
      minHeight={150} />
      );
      </div>
    );
  }

}

export default Grid;