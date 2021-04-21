import React, { useState, useEffect } from "react";
import DataTable from 'react-data-table-component';
import DataTableExtensions from 'react-data-table-component-extensions';
import 'react-data-table-component-extensions/dist/index.css';
import axios from 'axios';
import { Redirect } from "react-router";

const User = () => {
    const [userStatus, setUserStatus] = useState([])
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const countPerPage = 10;

    const columns = [
        {
            name: 'Institution Name',
            selector: 'institution_name',
            sortable: true
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true
        },
        {
            name: 'Code',
            selector: 'code',
            sortable: true
        },
        {
            name: 'Date Created',
            selector: 'date_created',
            sortable: true,
            cell: d => d.date_created
        },
        {
            name: "Options",
            sortable: false,
            cell: d => <div><a href={'users/share/'+d.id}><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="invoice-row-4996-send-icon" className="cursor-pointer feather feather-send"><line data-v-9a6e255c="" x1="22" y1="2" x2="11" y2="13"></line><polygon data-v-9a6e255c="" points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a><a href={'users/view/'+d.id}><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="invoice-row-4996-preview-icon" className="mx-1 feather feather-eye"><path data-v-9a6e255c="" d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle data-v-9a6e255c="" cx="12" cy="12" r="3"></circle></svg></a><a href={'users/edit/'+d.id}><svg data-v-9a6e255c="" xmlns="http://www.w3.org/2000/svg" width="14px" height="14px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path data-v-9a6e255c="" d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path data-v-9a6e255c="" d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></a>
            </div>
          }
      ];

    /*useEffect(() => {
        fetch("https://shona-nag-cms.herokuapp.com/accounts")
            .then(response => response.json())
            .then((json) => setUserStatus(json))
            accounts();
    }, [page]);*/

    const users = () => {  
        const getUser = () => {
            const userStr = localStorage.getItem("users");
            if(userStr) return JSON.parse(userStr);
            else return null
        }
        const user = getUser();           
        if(user == null){
            return <Redirect to='/login' />
        }      
        const userid = user.userid
        const role = user.role
        axios.get(`https://shona-nag-cms.herokuapp.com/users?page=${page}&per_page=${countPerPage}&submited_by=${userid}&role=${role}`).then(response => {
            //console.log(response.data)
            setUserStatus(response.data);
            setIsLoading(false)
        }).catch(err => {
            setUserStatus([]);
        });
    }

    let data = userStatus.data;
    const tableData = { columns, data };

    useEffect(() => {
        users();
    }, [page]);

    return (
        <>
            <div className="card">
                <DataTableExtensions {...tableData}>  
                {!isLoading ? (  
                <DataTable
                    columns={columns}
                    data={userStatus.data}
                    highlightOnHover
                    pagination
                    title="Users"
                    paginationServer
                    searchPlaceholder
                    search
                    paginationTotalRows={userStatus.total}
                    paginationPerPage={countPerPage}
                    paginationComponentOptions={{
                        noRowsPerPage: true
                    }}
                    onChangePage={page => setPage(page-1)}  
                    defaultSortField="id"
                    defaultSortAsc={false}                      
                    PageLength={5}                
                    /> 
                    ) : (
                  <div className="center"><svg width="40px" height="40px" viewBox="0 0 40 40" enable-background="new 0 0 40 40">
                  <path opacity="0.2" fill="#000" d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
                    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
                    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"/>
                  <path fill="#000" d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
                    C22.32,8.481,24.301,9.057,26.013,10.047z">
                    <animateTransform attributeType="xml"
                      attributeName="transform"
                      type="rotate"
                      from="0 20 20"
                      to="360 20 20"
                      dur="0.5s"
                      repeatCount="indefinite"/>
                    </path>
                  </svg></div>
                )} 
                    </DataTableExtensions>
            </div>
        </>
    );
};

export default User;