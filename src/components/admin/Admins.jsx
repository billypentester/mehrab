import React from 'react'

import {Table} from 'react-bootstrap'

function Admins() {
  return (
    <div>
        <div className="p-4 rounded-2 innerside">
            <Table striped bordered hover variant="dark" className='text-center'>
                <thead>
                    <tr className="py-2">
                        <th>Sr No.</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Permission</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Marktown</td>
                        <td>makry1236</td>
                        <td>View</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'><i class="fa fa-pencil" aria-hidden="true"></i>Edit </button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Jaccyvon</td>
                        <td>Jaccyvon@123</td>
                        <td>View</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'><i class="fa fa-pencil" aria-hidden="true"></i>Edit </button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Bilal</td>
                        <td>billypentester</td>
                        <td>icweb136</td>
                        <td>View / Edit</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'><i class="fa fa-pencil" aria-hidden="true"></i>Edit </button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Seerat</td>
                        <td>SeeratSalman</td>
                        <td>salman@1245</td>
                        <td>View</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'><i class="fa fa-pencil" aria-hidden="true"></i>Edit </button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Ali</td>
                        <td>AliAhmad</td>
                        <td>Ali7865</td>
                        <td>View</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'><i class="fa fa-pencil" aria-hidden="true"></i>Edit </button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Admins