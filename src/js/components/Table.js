import React from 'react';

const TableComponet = () => {
    return (
        <div className="table-responsive-xl">
                <table className="table table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Experiencia</th>
                            <th scope="col">Especialidad</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>
                               <div className="form-check">
                                   <input className="form-check-input" 
                                      type="radio" 
                                      name="exampleRadios" 
                                      id="exampleRadios1" 
                                      value="option1"/>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>
                               <div className="form-check">
                                   <input className="form-check-input" 
                                      type="radio" 
                                      name="exampleRadios" 
                                      id="exampleRadios1" 
                                      value="option1"/>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            <td>
                               <div className="form-check">
                                   <input className="form-check-input" 
                                      type="radio" 
                                      name="exampleRadios" 
                                      id="exampleRadios1" 
                                      value="option1"/>
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
        </div>
    )
}
export default TableComponet;