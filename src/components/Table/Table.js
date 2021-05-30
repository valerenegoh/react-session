import React from 'react';

const Table = (props) => {

    return (
        <div>
            <h1>Existing team members</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {props.entries.map((item, i) => (
                        <tr key={i}>
                            <td>{item.Name}</td>
                            <td>{item.Role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;