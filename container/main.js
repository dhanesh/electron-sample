/*jshint esversion: 6 */

import React from 'react';
import ReactDOM from 'react-dom';

//const {dialog} = require('electron');


class Search extends React.Component {

  openDialog(){
      dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']});
  }

  render() {
    return (
      <form>
        <input type="text" />
        <button onClick={this.openDialog} type="button">Select file</button>
      </form>
    );
  }

}

ReactDOM.render(
  <Search />,
  document.getElementById('content')
);
