export function UserTableRow({id, email, token}) {
  return (
    <tr>
      <td>{id}</td>
      <td>{email}</td>
      <td>{token}</td>
    </tr>
  );
}
