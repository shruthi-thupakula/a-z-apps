import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Grid,
    VirtualTable,
    TableHeaderRow,
    TableFixedColumns,
} from '@devexpress/dx-react-grid-material-ui';

const columnNames = [
    { title: <b>Learners</b>, name: "learners" },
    { title: <b>Score</b>, name: "score" },
    { title: <b>No.of questions attempted</b>, name: "noofquestionsattempted" },
    { title: <b>Time taken</b>, name: "timetaken" },

    { title: <b>Status</b>, name: "status" },
    { title: <b>Submitted on</b>, name: "submittedon" }
]
const modifiedData = [
    {
        "learners": "Bessie Riley ",
        "score": "40/55",
        "noofquestionsattempted": 34,
        "timetaken": "50mins",
        "status": "Submitted",
        "submittedon": "22nd Feb 2020",
        "email":"adams_andy@elyse.tv",
        "time":"10:35 am"

    },
    {
        "learners": "Steve Harmon",
        "score": "-",
        "noofquestionsattempted": 50,
        "timetaken": "1hr 2mins",
        "status": "Not attempted",
        "submittedon": " ",
        "email":"adams_andy@elyse.tv"
       

    },
    {
        "learners": "Jorge Cobb",
        "score": "60/55",
        "noofquestionsattempted": 60,
        "timetaken": "40 mins",
        "status": "Submitted",
        "submittedon": "22nd Feb 2020",
        "email":"adams_andy@elyse.tv",
        "time":"10:35 am"

    },
    {
        "learners": "Olga Glover",
        "score": "-",
        "noofquestionsattempted": "100",
        "timetaken": "50mins",
        "status": "Not attempted",
        "submittedon": " ",
        "email":"adams_andy@elyse.tv"

    },
    {
        "learners": "Emily Bryan",
        "score": "62/55",
        "noofquestionsattempted": "20",
        "timetaken": "50mins",
        "status": "Submitted",
        "submittedon": "22nd Feb 2020",
        "email":"adams_andy@elyse.tv",
        "time":"10:35 am"

    },
    {
        "learners": "Karthyn Mullins",
        "score": "-",
        "noofquestionsattempted": "30",
        "timetaken": "40mins",
        "status": "Not attempted",
        "submittedon": " ",
        "email":"adams_andy@elyse.tv"

    },
    {
        "learners": "Harvey Fiueroa",
        "score": "35/55",
        "noofquestionsattempted": "40",
        "timetaken": "30mins",
        "status": "Submitted",
        "submittedon": "22 Feb 2020",
        "email":"adams_andy@elyse.tv",
        "time":"10:35 am"

    },
    {
        "learners": "Cecilia Aivarez",
        "score": "-",
        "noofquestionsattempted": "50",
        "timetaken": "50mins",
        "status": "Not attempted",
        "submittedon": " ",
        "email":"adams_andy@elyse.tv"

    },
    {
        "learners": "Bradley Cook",
        "score": "70/55",
        "noofquestionsattempted": "60",
        "timetaken": "55 mins",
        "status": "Submitted",
        "submittedon": "22 Feb 2020",
        "email":"adams_andy@elyse.tv",
        "time":"10:35 am"

    },
    {
        "learners": "Lee Kennedy",
        "score": "-",
        "noofquestionsattempted": "45",
        "timetaken": "50mins",
        "status": "Not registered",
        "submittedon": " ",
        "email":"adams_andy@elyse.tv"

    },
    {
        "learners": "Adire Buns",
        "score": "-",
        "noofquestionsattempted": "32",
        "timetaken": "50mins",
        "status": "Not registered",
        "submittedon": " ",
        "email":"adams_andy@elyse.tv"

    },
    {
        "learners": " Kennedy",
        "score": "-",
        "noofquestionsattempted": "40",
        "timetaken": "50mins",
        "status": "Not registered",
        "submittedon": " ",
        "email":"adams_andy@elyse.tv"

    }
]

const StyleStatus = (status) => {
    switch (status) {
        case 'Submitted': status = <b style={{ fontSize: "16px", color: "#00c62b" }}>{status}</b>; break;
        case 'Not attempted': status = <b style={{ fontSize: "16px", color: "#cfd0d1" }}>{status}</b>; break;
        case 'Not registered': status = <b style={{ fontSize: "16px", color: "#c60018" }}>{status}</b>; break;
    }

    return (
        <span>
            {status}</span>
    )
}
const StyleStatus1 = (score) => {
    const values = score.split('/');
    if (isNaN(values[0])) {
        return (<b style={{ color: "#5b5b71" }}>{values[0]}</b>)

    } else if (values[0] >= 60) {
        return (<b style={{ color: "#00c62b" }}><span style={{ fontSize: '20px' }}>{values[0]}</span>/{values[1]}</b>)
    }
    else {
        return (<b style={{ color: "#c60018" }}><span style={{ fontSize: '20px' }}>{values[0]}</span>/{values[1]}</b>)
    }
}




const StyleName=(name, email)=>{
    return<div>
        <b style={{fontSize:"15px",color:"#5b5b71"}}>{name}</b>
        <br/><span style={{fontSize:"13px",color:"#b5b5b5"}}>{email}</span>
    </div>
}
const StyleTime=(date, time)=>{
    return<div>
        <b style={{fontSize:"15px",color:"#5b5b71"}}>{date}</b>
        <br/><span style={{fontSize:"13px",color:"#b5b5b5"}}>{time}</span>
    </div>
}
export default class FinalTable extends React.Component {
    constructor() {
        super();
        this.state = {
            rows: modifiedData.map((row) => {
                row.learners = StyleName(row.learners,row.email);
                row.submittedon = StyleTime(row.submittedon,row.time);
                row.noofquestionsattempted = <b>{row.noofquestionsattempted}</b>;
               
                row.timetaken = <b>{row.timetaken}</b>;
                row.status = StyleStatus(row.status);
                row.score = StyleStatus1(row.score);
                

                return row
            }),

            columns: columnNames,
            leftFixed: ["learners"],
            rightFixed: ['submittedon'],
            ableColumnExtensions: [
                { columnName: "learners", width: "250" },
                { columnName: "score", width: "250" },
                { columnName: "noofquestionsattempted", width: "250" },
                { columnName: "timetaken", width: "250" },
                { columnName: "status", width: "250" },
                { columnName: "submittedon", width: "250" }
            ]

        }
    }
    render() {
        return (
            <Paper>
                <Grid
                    rows={this.state.rows}
                    columns={this.state.columns}>
                    <VirtualTable
                        columnExtensions={this.state.tableColumnExtension} />
                    <TableHeaderRow />
                    <TableFixedColumns
                        leftColumns={this.state.leftFixed}
                        // rightColumns={this.state.rightFixed}
                    />



                </Grid>
            </Paper>
        );
    }
}
