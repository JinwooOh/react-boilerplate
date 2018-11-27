import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

export default class QuestionTable extends Component {
  render() {
    const columns = [
      {
        Header: 'Question',
        accessor: 'question',
      },
      {
        Header: 'Course Number',
        accessor: 'courseNumber',
      },
      {
        Header: 'Test Difficulty',
        accessor: 'difficulty',
      },
      {
        Header: 'Number of Questions',
        accessor: 'numberQuestions',
      },
      {
        Header: 'Time Limit',
        accessor: 'timeLimit',
      },
    ];

    return (
      <div>
        <ReactTable
          columns={columns}
          data={this.props.questionList}
          // onFetchData={this.fetchData}
          defaultPageSize={10}
          SubComponent={row => {
            return (
              <div style={{ padding: '5px' }}>
                <div>
                  <button
                    onClick={() => {
                      this.props.handleViewQuestion(row.original._id);
                    }}
                  >
                    View/Edit
                  </button>
                  <button
                    onClick={() => {
                      console.log('Delete this question');
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          }}
        />
      </div>
    );
  }
}
