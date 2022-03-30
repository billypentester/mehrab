import React from 'react'

import {Table} from 'react-bootstrap'

function Users() {
  return (
    <div>
        <div style={{backgroundColor:'#12263f'}} className="p-4 rounded-2">
            <div className='d-flex justify-content-end'>
                <div className='my-3 d-flex'>
                    <input type="search" placeholder="Search the user" name="search" />
                    <button type="submit" className='bg-transparent mx-1 border-0'><i class="fa fa-search"></i></button>
                </div>
            </div>
            <Table striped bordered hover variant="dark" className='text-center'>
                <thead>
                    <tr className="py-2">
                        <th>Sr No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone No.</th>
                        <th>City</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>Ahmad</td>
                        <td>BilalSheikh2500@gmail.com</td>
                        <td>03324187624</td>
                        <td>Lahore</td>
                        <td>icweb136</td>
                        <td>
                            <button type="submit" className='bg-danger p-2 my-2 rounded-2 border-0'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>Ahmad</td>
                        <td>BilalSheikh2500@gmail.com</td>
                        <td>03324187624</td>
                        <td>Lahore</td>
                        <td>icweb136</td>
                        <td>
                            <button type="submit" className='bg-danger p-2 my-2 rounded-2 border-0'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>Ahmad</td>
                        <td>BilalSheikh2500@gmail.com</td>
                        <td>03324187624</td>
                        <td>Lahore</td>
                        <td>icweb136</td>
                        <td>
                            <button type="submit" className='bg-danger p-2 my-2 rounded-2 border-0'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>Ahmad</td>
                        <td>BilalSheikh2500@gmail.com</td>
                        <td>03324187624</td>
                        <td>Lahore</td>
                        <td>icweb136</td>
                        <td>
                            <button type="submit" className='bg-danger p-2 my-2 rounded-2 border-0'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>Ahmad</td>
                        <td>BilalSheikh2500@gmail.com</td>
                        <td>03324187624</td>
                        <td>Lahore</td>
                        <td>icweb136</td>
                        <td>
                            <button type="submit" className='bg-danger p-2 my-2 rounded-2 border-0'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>Ahmad</td>
                        <td>BilalSheikh2500@gmail.com</td>
                        <td>03324187624</td>
                        <td>Lahore</td>
                        <td>icweb136</td>
                        <td>
                            <button type="submit" className='bg-danger p-2 my-2 rounded-2 border-0'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>Ahmad</td>
                        <td>BilalSheikh2500@gmail.com</td>
                        <td>03324187624</td>
                        <td>Lahore</td>
                        <td>icweb136</td>
                        <td>
                            <button type="submit" className='bg-danger p-2 my-2 rounded-2 border-0'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>Ahmad</td>
                        <td>BilalSheikh2500@gmail.com</td>
                        <td>03324187624</td>
                        <td>Lahore</td>
                        <td>icweb136</td>
                        <td>
                            <button type="submit" className='bg-danger p-2 my-2 rounded-2 border-0'>Remove</button>
                        </td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Bilal</td>
                        <td>Ahmad</td>
                        <td>BilalSheikh2500@gmail.com</td>
                        <td>03324187624</td>
                        <td>Lahore</td>
                        <td>icweb136</td>
                        <td>
                            <button type="submit" className='bg-danger p-2 my-2 rounded-2 border-0'>Remove</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Users