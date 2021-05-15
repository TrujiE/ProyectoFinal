import React from 'react';

const TableComponet = () => {
    return (
        <div className="table-responsive-xl">
            <table className="table">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Experiencia</th>
                            <th scope="col">Especialidad</th>
                        </tr>
                    </thead>
                    <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            
                                <tr>
                                    <td>2</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                </tr>
                           
                                <tr>
                                    <td>3</td>
                                    <td>Larry</td>
                                    <td>the Bird</td>
                                    <td>@twitter</td>
                                </tr>
                           
                    </tbody>
                </table>
            </table>
        </div>
    )
}
export default TableComponet;