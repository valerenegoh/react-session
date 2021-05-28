import React from 'react';

const Table = (props) => {
    console.log(props);
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
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;