import React from 'react'

import intro from './../../images/intro.png'

function Objective() {
  return (
    <div>

        <section class=" bg-dark">

            <span className="display-4 text-center pt-5 d-block">Motivation</span>

            <div class="container py-5">
            <div class="d-flex justify-content-center align-items-center">
                <div class="col-5 text-center" style={{fontSize:'20px'}}>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                <a className="btn blue-gradient border-0 py-3 py-2" href="#contact"><i class="fa-brands fa-unity"></i> Join our team</a>
                </div>
                <div class="col-5 d-flex justify-content-center">
                <img src={intro} width="350px" />
                </div>
            </div>
            </div>

        </section>

    </div>
  )
}

export default Objective