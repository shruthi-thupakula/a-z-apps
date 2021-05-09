import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Grid,
    VirtualTable,
    TableHeaderRow,
    TableFixedColumns,
} from '@devexpress/dx-react-grid-material-ui';


//https://datatables.net/examples/data_sources/js_array
const colNames = [
    { title: "Name", name: "name" },
    { title: "Position", name: "position" },
    { title: "Office", name: "office" },
    { title: "Extn.", name: "extension" },
    { title: "Start date", name: "startDate" },
    { title: "Salary", name: "salary" }
]
const modifiedDummyData=[
    {
      "name": "Tiger Nixon",
      "position": "System Architect",
      "office": "Edinburgh",
      "extension": "Edinburgh",
      "startDate": "2011/04/25",
      "salary": "$320,800"
    },
    {
      "name": "Garrett Winters",
      "position": "Accountant",
      "office": "Tokyo",
      "extension": "Tokyo",
      "startDate": "2011/07/25",
      "salary": "$170,750"
    },
    {
      "name": "Ashton Cox",
      "position": "Junior Technical Author",
      "office": "San Francisco",
      "extension": "San Francisco",
      "startDate": "2009/01/12",
      "salary": "$86,000"
    },
    {
      "name": "Cedric Kelly",
      "position": "Senior Javascript Developer",
      "office": "Edinburgh",
      "extension": "Edinburgh",
      "startDate": "2012/03/29",
      "salary": "$433,060"
    },
    {
      "name": "Airi Satou",
      "position": "Accountant",
      "office": "Tokyo",
      "extension": "Tokyo",
      "startDate": "2008/11/28",
      "salary": "$162,700"
    },
    {
      "name": "Brielle Williamson",
      "position": "Integration Specialist",
      "office": "New York",
      "extension": "New York",
      "startDate": "2012/12/02",
      "salary": "$372,000"
    },
    {
      "name": "Herrod Chandler",
      "position": "Sales Assistant",
      "office": "San Francisco",
      "extension": "San Francisco",
      "startDate": "2012/08/06",
      "salary": "$137,500"
    },
    {
      "name": "Rhona Davidson",
      "position": "Integration Specialist",
      "office": "Tokyo",
      "extension": "Tokyo",
      "startDate": "2010/10/14",
      "salary": "$327,900"
    },
    {
      "name": "Colleen Hurst",
      "position": "Javascript Developer",
      "office": "San Francisco",
      "extension": "San Francisco",
      "startDate": "2009/09/15",
      "salary": "$205,500"
    },
    {
      "name": "Sonya Frost",
      "position": "Software Engineer",
      "office": "Edinburgh",
      "extension": "Edinburgh",
      "startDate": "2008/12/13",
      "salary": "$103,600"
    },
    {
      "name": "Jena Gaines",
      "position": "Office Manager",
      "office": "London",
      "extension": "London",
      "startDate": "2008/12/19",
      "salary": "$90,560"
    },
    {
      "name": "Quinn Flynn",
      "position": "Support Lead",
      "office": "Edinburgh",
      "extension": "Edinburgh",
      "startDate": "2013/03/03",
      "salary": "$342,000"
    },
    {
      "name": "Charde Marshall",
      "position": "Regional Director",
      "office": "San Francisco",
      "extension": "San Francisco",
      "startDate": "2008/10/16",
      "salary": "$470,600"
    },
    {
      "name": "Haley Kennedy",
      "position": "Senior Marketing Designer",
      "office": "London",
      "extension": "London",
      "startDate": "2012/12/18",
      "salary": "$313,500"
    },
    {
      "name": "Tatyana Fitzpatrick",
      "position": "Regional Director",
      "office": "London",
      "extension": "London",
      "startDate": "2010/03/17",
      "salary": "$385,750"
    },
    {
      "name": "Michael Silva",
      "position": "Marketing Designer",
      "office": "London",
      "extension": "London",
      "startDate": "2012/11/27",
      "salary": "$198,500"
    },
    {
      "name": "Paul Byrd",
      "position": "Chief Financial Officer (CFO)",
      "office": "New York",
      "extension": "New York",
      "startDate": "2010/06/09",
      "salary": "$725,000"
    },
    {
      "name": "Gloria Little",
      "position": "Systems Administrator",
      "office": "New York",
      "extension": "New York",
      "startDate": "2009/04/10",
      "salary": "$237,500"
    },
    {
      "name": "Bradley Greer",
      "position": "Software Engineer",
      "office": "London",
      "extension": "London",
      "startDate": "2012/10/13",
      "salary": "$132,000"
    },
    {
      "name": "Dai Rios",
      "position": "Personnel Lead",
      "office": "Edinburgh",
      "extension": "Edinburgh",
      "startDate": "2012/09/26",
      "salary": "$217,500"
    },
    {
      "name": "Jenette Caldwell",
      "position": "Development Lead",
      "office": "New York",
      "extension": "New York",
      "startDate": "2011/09/03",
      "salary": "$345,000"
    },
    {
      "name": "Yuri Berry",
      "position": "Chief Marketing Officer (CMO)",
      "office": "New York",
      "extension": "New York",
      "startDate": "2009/06/25",
      "salary": "$675,000"
    },
    {
      "name": "Caesar Vance",
      "position": "Pre-Sales Support",
      "office": "New York",
      "extension": "New York",
      "startDate": "2011/12/12",
      "salary": "$106,450"
    },
    {
      "name": "Doris Wilder",
      "position": "Sales Assistant",
      "office": "Sydney",
      "extension": "Sydney",
      "startDate": "2010/09/20",
      "salary": "$85,600"
    },
    {
      "name": "Angelica Ramos",
      "position": "Chief Executive Officer (CEO)",
      "office": "London",
      "extension": "London",
      "startDate": "2009/10/09",
      "salary": "$1,200,000"
    },
    {
      "name": "Gavin Joyce",
      "position": "Developer",
      "office": "Edinburgh",
      "extension": "Edinburgh",
      "startDate": "2010/12/22",
      "salary": "$92,575"
    },
    {
      "name": "Jennifer Chang",
      "position": "Regional Director",
      "office": "Singapore",
      "extension": "Singapore",
      "startDate": "2010/11/14",
      "salary": "$357,650"
    },
    {
      "name": "Brenden Wagner",
      "position": "Software Engineer",
      "office": "San Francisco",
      "extension": "San Francisco",
      "startDate": "2011/06/07",
      "salary": "$206,850"
    },
    {
      "name": "Fiona Green",
      "position": "Chief Operating Officer (COO)",
      "office": "San Francisco",
      "extension": "San Francisco",
      "startDate": "2010/03/11",
      "salary": "$850,000"
    },
    {
      "name": "Shou Itou",
      "position": "Regional Marketing",
      "office": "Tokyo",
      "extension": "Tokyo",
      "startDate": "2011/08/14",
      "salary": "$163,000"
    },
    {
      "name": "Michelle House",
      "position": "Integration Specialist",
      "office": "Sydney",
      "extension": "Sydney",
      "startDate": "2011/06/02",
      "salary": "$95,400"
    },
    {
      "name": "Suki Burks",
      "position": "Developer",
      "office": "London",
      "extension": "London",
      "startDate": "2009/10/22",
      "salary": "$114,500"
    },
    {
      "name": "Prescott Bartlett",
      "position": "Technical Author",
      "office": "London",
      "extension": "London",
      "startDate": "2011/05/07",
      "salary": "$145,000"
    },
    {
      "name": "Gavin Cortez",
      "position": "Team Leader",
      "office": "San Francisco",
      "extension": "San Francisco",
      "startDate": "2008/10/26",
      "salary": "$235,500"
    },
    {
      "name": "Martena Mccray",
      "position": "Post-Sales support",
      "office": "Edinburgh",
      "extension": "Edinburgh",
      "startDate": "2011/03/09",
      "salary": "$324,050"
    },
    {
      "name": "Unity Butler",
      "position": "Marketing Designer",
      "office": "San Francisco",
      "extension": "San Francisco",
      "startDate": "2009/12/09",
      "salary": "$85,675"
    }
  ];
  const dummyData =  [
    ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
    ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
    ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
    ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
    ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
    ["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
    ["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
    ["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
    ["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
    ["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
    ["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
    ["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
    ["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
    ["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
    ["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
    ["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
    ["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
    ["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
    ["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
    ["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
    ["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
    ["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
    ["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
    ["Doris Wilder", "Sales Assistant", "Sydney", "3023", "2010/09/20", "$85,600"],
    ["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
    ["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
    ["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
    ["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
    ["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
    ["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
    ["Michelle House", "Integration Specialist", "Sydney", "2769", "2011/06/02", "$95,400"],
    ["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
    ["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
    ["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
    ["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
    ["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
];

export default class TestTable extends React.Component {
    constructor() {
        super();
        this.state = {
            rows: modifiedDummyData,
            cols: colNames,
            // only name attribute from colNames has to be given
            leftFixed: ['name'],
            rightFixed: ["salary"],
            tableColumnExtensions:[
              { columnName: "name", width:"150" },
              { columnName: "position", width:"150" },
              { columnName: "office", width:"150" },
              { columnName: "extension", width:"150" },
              { columnName: "startDate", width:"150" },
              { columnName: "salary", width:"150", align:"right" }
          ]
        }
    }
    //   const [columns] = useState([
    //     { name: 'region', title: 'Region' },
    //     { name: 'sector', title: 'Sector' },
    //     { name: 'channel', title: 'Channel' },
    //     { name: 'customer', title: 'Customer' },
    //     { name: 'product', title: 'Product' },
    //     { name: 'saleDate', title: 'Sale date' },
    //     { name: 'amount', title: 'Sale Amount' },
    //   ]);
    //   const [rows] = useState);
    //   const [leftColumns] = useState(['region', 'sector']);
    //   const [rightColumns] = useState(['amount']);
    render() {
        return (
            <Paper>
                <Grid
                    rows={this.state.rows}
                    columns={this.state.cols}
                >
                     <VirtualTable
                      columnExtensions={this.state.tableColumnExtensions}
                    /> 
                    <TableHeaderRow />
                    <TableFixedColumns
                        leftColumns={this.state.leftFixed}
                        rightColumns={this.state.rightFixed}
                    /> 
                </Grid>
            </Paper>
        )
    }
    ;
};
