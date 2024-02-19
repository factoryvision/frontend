// 게시판 목록
import Link from "next/link";

const boardList = () => {
  return (
    <div className="board-list">
      <h4> Total post : 10개 </h4>

      <table>
        <colgroup>
          <col width="15%" />
          <col width="65%" />
          <col width="20%" />
        </colgroup>

        <thead>
          <tr>
            <th>No</th>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default boardList;
