import React from 'react'

import {Table} from 'react-bootstrap'

function Contact() {
  return (
    <div style={{backgroundColor: '#12263f'}}>
        <div className="p-4 rounded-2">
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto@gmail.com</td>
                        <td>hello, I want some feature.</td>
                        <td>01-01-2022</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'>Send Email</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton@hotmail.com</td>
                        <td>Thanks for responsive answer</td>
                        <td>21-05-2021</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'>Send Email</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Bilal</td>
                        <td>BilalAhmad@hotmail.com</td>
                        <td>It's amazing website.</td>
                        <td>14-10-2020</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'>Send Email</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Seerat</td>
                        <td>Seeratsalman@hotmail.com</td>
                        <td>I want some ML features.</td>
                        <td>23-01-2022</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'>Send Email</button>
                        </td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Ali</td>
                        <td>AliAhmad@gmail.com</td>
                        <td>I like UI design.</td>
                        <td>04-10-2021</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'>Send Email</button>
                        </td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Farinah</td>
                        <td>FarinahIftikhar@gmail.com</td>
                        <td>I want to get admission details.</td>
                        <td>19-06-2021</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'>Send Email</button>
                        </td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Shoaib</td>
                        <td>Shoaib@gmail.com</td>
                        <td>It's amazing website.</td>
                        <td>14-10-2020</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'>Send Email</button>
                        </td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Moazzam</td>
                        <td>Moazzam@hotmail.com</td>
                        <td>It's amazing website.</td>
                        <td>14-10-2020</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'>Send Email</button>
                        </td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Osama</td>
                        <td>Osama@hotmail.com</td>
                        <td>It's amazing website.</td>
                        <td>14-10-2020</td>
                        <td>
                            <button type="submit" className='bg-primary p-2 my-2 rounded-2 border-0'>Send Email</button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div>
  )
}

export default Contact