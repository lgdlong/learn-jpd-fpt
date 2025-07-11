import React from "react";

import "@/styles/grammar-content.css";

export default function GrammarContent() {
  return (
    <>
      <section
        id="bai4"
        className="mb-5 lesson-section animate__animated fade-in"
      >
        <h2 className="text-center mb-4">Bài 4: Chia tính từ い và な</h2>
        <div className="grammar-point">
          <h3>I. Chia tính từ い và な</h3>
          <table className="table table-bordered table-hover mt-4">
            <thead className="thead-light">
              <tr>
                <th></th>
                <th>Tính từ - い</th>
                <th>Tính từ - な</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Khẳng định</td>
                <td>Adj-い + です</td>
                <td>Adj-な + です</td>
              </tr>
              <tr>
                <td>Phủ định</td>
                <td>Adj (bỏ い) + くないです</td>
                <td>Adj-な + じゃありません</td>
              </tr>
              <tr>
                <td>Quá khứ</td>
                <td>Adj (bỏ い) + かったです</td>
                <td>Adj-な + でした</td>
              </tr>
              <tr>
                <td>Phủ định quá khứ</td>
                <td>Adj (bỏ い) + くなかったです</td>
                <td>Adj-な + じゃありませんでした</td>
              </tr>
            </tbody>
          </table>
          <div className="alert alert-info mt-3">
            <strong>Lưu ý:</strong>
            <ul>
              <li>
                Có một số tính từ đuôi い nhưng lại là tính từ - な (Ví dụ như
                ゆうめい・きらい・きれい).
              </li>
              <li>
                いい là tính từ đặc biệt: いい → よくない → よかった →
                よくなかった.
              </li>
            </ul>
          </div>

          <div className="example-box mt-4">
            <h4 className="example-title">Ví dụ:</h4>
            <div className="row">
              <div className="col-md-6">
                <h5>Tính từ - い:</h5>
                <ul className="example-list">
                  <li>Khẳng định: たかいです - Cao.</li>
                  <li>Phủ định: たかくないです - Không cao.</li>
                  <li>Quá khứ: たかかったです - Đã cao.</li>
                  <li>Phủ định quá khứ: たかくなかったです - Đã không cao.</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h5>Tính từ - な:</h5>
                <ul className="example-list">
                  <li>Khẳng định: しずかです - Yên tĩnh.</li>
                  <li>Phủ định: しずかじゃありません - Không yên tĩnh.</li>
                  <li>Quá khứ: しずかでした - Đã yên tĩnh.</li>
                  <li>
                    Phủ định quá khứ: しずかじゃありませんでした - Đã không yên
                    tĩnh.
                  </li>
                </ul>
              </div>
            </div>
            <div className="example-sentence mt-3">
              <h5>
                さむい (lạnh - tính từ) い và しずか (yên tĩnh - tính từ) な:
              </h5>
              <p>
                <strong>Hiện tại khẳng định:</strong>
              </p>
              <div className="example">
                <p className="japanese-sentence">
                  きょう は さむいです。そして、しずかです。
                </p>
                <p className="romaji">
                  Kyou wa samui desu. Soshite, shizuka desu.
                </p>
                <p className="translation">
                  <em>Hôm nay trời lạnh và yên tĩnh.</em>
                </p>
              </div>
              <p>
                <strong>Phủ định quá khứ:</strong>
              </p>
              <div className="example">
                <p className="japanese-sentence">
                  きのう は
                  さむくなかったです。そして、しずかじゃありませんでした。
                </p>
                <p className="romaji">
                  Kinou wa samukunakatta desu. Soshite, shizuka ja arimasen
                  deshita.
                </p>
                <p className="translation">
                  <em>Hôm qua trời đã không lạnh và cũng không yên tĩnh.</em>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grammar-point mt-5">
          <h3>II. Tính từ bổ nghĩa cho Danh từ và Động từ</h3>
          <div className="sub-section">
            <h4>1. Tính từ bổ nghĩa cho Danh từ</h4>
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Loại tính từ</th>
                  <th>Cách dùng</th>
                  <th>Ví dụ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tính từ - い</td>
                  <td>Giữ nguyên tính từ い khi đứng trước danh từ</td>
                  <td>あたらしい くるま (Xe mới)</td>
                </tr>
                <tr>
                  <td>Tính từ - な</td>
                  <td>Thêm な vào sau tính từ な khi đứng trước danh từ</td>
                  <td>ゆうめいな ひと (Người nổi tiếng)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="sub-section mt-4">
            <h4>2. Tính từ bổ nghĩa cho Động từ</h4>
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Loại tính từ</th>
                  <th>Cách dùng</th>
                  <th>Ví dụ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Tính từ - い</td>
                  <td>Adj (bỏ い) + く + Động từ</td>
                  <td>パンを ちいさく きります (Cắt bánh mì nhỏ)</td>
                </tr>
                <tr>
                  <td>Tính từ - な</td>
                  <td>Adj + に + Động từ</td>
                  <td>へやを きれいに します (Dọn phòng sạch sẽ)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grammar-point mt-5">
          <h3>III. Các từ chỉ mức độ</h3>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Từ</th>
                <th>Ý nghĩa</th>
                <th>Cách dùng</th>
                <th>Ví dụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>とても</td>
                <td>Rất</td>
                <td>Dùng với tính từ khẳng định</td>
                <td>とても あついです。(Trời rất nóng)</td>
              </tr>
              <tr>
                <td>あまり</td>
                <td>Không... lắm</td>
                <td>Thường đi kèm với phủ định</td>
                <td>あまり さむくないです。(Trời không lạnh lắm)</td>
              </tr>
              <tr>
                <td>すこし</td>
                <td>Một chút</td>
                <td>Thường dùng với tính từ khẳng định</td>
                <td>すこし たかいです。(Hơi cao một chút)</td>
              </tr>
              <tr>
                <td>ぜんぜん</td>
                <td>Hoàn toàn không</td>
                <td>Luôn đi kèm với câu phủ định</td>
                <td>ぜんぜん げんきじゃありません。(Hoàn toàn không khỏe)</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grammar-point mt-5">
          <h3>IV. Liên từ</h3>
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Từ nối</th>
                <th>Ý nghĩa</th>
                <th>Cấu trúc</th>
                <th>Ghi chú</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>が</td>
                <td>nhưng</td>
                <td>Câu 1 が Câu 2</td>
                <td>Dùng để nối hai vế trái chiều trong cùng một câu.</td>
              </tr>
              <tr>
                <td>しかし</td>
                <td>nhưng</td>
                <td>Câu 1。しかし Câu 2</td>
                <td>
                  Dùng để tạo thành hai câu đơn, vế sau thường trái ngược với vế
                  trước.
                </td>
              </tr>
              <tr>
                <td>そして</td>
                <td>và</td>
                <td>Câu 1。そして Câu 2</td>
                <td>
                  Dùng để nối hai câu đơn, vế sau bổ sung hoặc tiếp nối ý nghĩa
                  của vế trước.
                </td>
              </tr>
              <tr>
                <td>でも</td>
                <td>nhưng</td>
                <td>Câu 1。でも Câu 2</td>
                <td>
                  Dùng để nối hai câu đơn, vế sau thường trái ngược với vế
                  trước.
                </td>
              </tr>
              <tr>
                <td>それから</td>
                <td>và sau đó</td>
                <td>Câu 1。それから Câu 2</td>
                <td>Dùng để nối hai câu đơn, vế sau diễn ra sau vế trước.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grammar-point mt-5">
          <h3>V. Một số mẫu câu khác</h3>
          <ul className="example-list">
            <li>
              <strong>Nơi chốn + に + Sự vật/Sự việc + があります:</strong> Tại
              đâu đó, có cái gì đó.
              <div className="example">
                私のまちにきれいなかわがあります (Ở thành phố của tôi có con
                sông đẹp).
              </div>
            </li>
            <li>
              <strong>Nơi chốn + で + Sự kiện + があります:</strong> Tại đâu đó,
              có sự kiện gì đó.
              <div className="example">
                日本でさむいひ、やきいもを食べます (Ở Nhật Bản, vào những ngày
                lạnh, người ta ăn khoai lang nướng).
              </div>
            </li>
            <li>
              <strong>
                Thành phố + は + Đất nước + の + Phương hướng/Vị trí + です:
              </strong>
              <div className="example">
                おきなわは日本のみなみです (Okinawa ở phía Nam Nhật Bản).
              </div>
            </li>
            <li>
              <strong>
                Nơi chốn + から + Nơi chốn + まで + どのくらいですか:
              </strong>{" "}
              Từ ... đến ... mất bao lâu?
              <div className="example">
                ホーチミンからハノイまでひこうきでどのくらいですか (Từ HCM đi Hà
                Nội bằng máy bay mất khoảng bao lâu?).
              </div>
            </li>
            <li>
              <strong>
                Nơi chốn + から + Nơi chốn + まで + Khoảng thời gian +
                です/かかります:
              </strong>{" "}
              Từ ... đến ... mất ...
              <div className="example">
                おさかからきょうとまででんしゃで30ぷんくらいです (Từ Osaka đến
                Kyoto bằng tàu điện mất khoảng 30 phút).
              </div>
            </li>
            <li>
              <strong>Phương tiện + で + Động từ:</strong> Làm [gì đó] bằng
              [phương tiện].
              <div className="example">
                私はコンピューターで日本語をべんきょうします (Tôi học tiếng Nhật
                bằng máy tính).
              </div>
            </li>
            <li>
              <strong>Khoảng thời gian + を + Động từ:</strong> Làm [gì đó]
              trong [bao lâu].
              <div className="example">
                まいばん、私は30分くらいテレビを見ます (Mỗi tối tôi xem TV
                khoảng 30 phút).
              </div>
            </li>
            <li>
              <strong>Nơi chốn + は + Thời điểm, + Tính từ + です:</strong>
              <div className="example">
                日本は6月、あめがおおいです (Ở Nhật Bản vào tháng 6, mưa nhiều).
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="bai5" className="mb-5 animate__animated fade-in">
        <h2 className="text-center mb-4">Bài 5: Mong muốn và Mục đích</h2>

        <div className="grammar-point">
          <h3>I. Thể hiện Mong Muốn</h3>
          <h4>1. わたしは N が ほしいです (Tôi muốn có N)</h4>
          <p>Dùng để diễn tả mong muốn sở hữu một vật hoặc một điều gì đó.</p>
          <p>Câu hỏi mong muốn: なにが ほしいですか (Bạn muốn cái gì?)</p>
          <div className="example">
            <ul>
              <li>
                わたしは くるま が ほしいです。(Tôi muốn có một chiếc xe hơi.)
              </li>
              <li>
                わたしは あたらしい かばん が ほしいです。(Tôi muốn có một chiếc
                cặp mới.)
              </li>
              <li>すしが ほしいです。(Tôi muốn có sushi.)</li>
            </ul>
          </div>
          <div className="alert alert-info">
            <strong>Lưu ý:</strong>
            <ul>
              <li>が: Chỉ sự nhấn mạnh mong muốn.</li>
              <li>Phủ định: N は ほしくないです - Tôi không muốn N.</li>
            </ul>
          </div>
        </div>

        <div className="grammar-point">
          <h4>2. V_たい (Muốn làm một việc gì đó)</h4>
          <p>
            Dùng để diễn tả mong muốn, nguyện vọng thực hiện một hành động nào
            đó.
          </p>
          <div className="example">
            <ul>
              <li>にほんへ いきたいです。(Tôi muốn đi Nhật Bản.)</li>
              <li>あした えいがを みたいです。(Ngày mai tôi muốn xem phim.)</li>
              <li>うみに いきたいです。(Tôi muốn đi biển.)</li>
            </ul>
          </div>
          <p>
            Câu hỏi giao tiếp: なにを したいですか。(Bạn muốn làm gì?) / どこへ
            いきたいですか。(Bạn muốn đi đâu?)
          </p>
          <div className="alert alert-info">
            <strong>Lưu ý:</strong>
            <ul>
              <li>V_たい chia như tính từ đuôi い.</li>
              <li>Có thể thay thế trợ từ を bằng が khi dùng với V_たい.</li>
            </ul>
          </div>
        </div>

        <div className="grammar-point">
          <h3>II. Diễn tả Mục đích của Chuyến đi</h3>{" "}
          <h4>
            {" "}
            Cấu trúc: A <span className="blue-text">へ</span> V/N{" "}
            <span className="red-text">に</span>{" "}
            <span className="green-text">いきます/きます/かえります</span>
          </h4>
          <ul>
            <li>A: Địa điểm</li>
            <li>V: Động từ (bỏ ます)</li>
            <li>N: Danh từ (thường kết hợp với する)</li>
            <li>
              <span className="green-text">いきます/きます/かえります</span>:
              Đi/Đến/Trở về
            </li>
          </ul>
          <p>Nghĩa: Đi/Đến/Trở về A để làm V/N.</p>
          <div className="example">
            <ul>
              {" "}
              <li>
                <u>デパート</u> <span className="blue-text">へ</span>{" "}
                <u>かいもの</u>
                <span className="red-text">に</span>
                <span className="green-text">いきます</span>。(Tôi đi đến cửa
                hàng bách hóa để mua đồ.)
              </li>{" "}
              <li>
                <u>ゆうびんきょく</u> <span className="blue-text">へ</span>{" "}
                <u>こづつみを だし</u>
                <span className="red-text">に</span>{" "}
                <span className="green-text">いきます</span>。(Tôi đi đến bưu
                điện để gửi bưu phẩm.)
              </li>{" "}
              <li>
                <u>かいしゃ</u> <span className="blue-text">へ</span>{" "}
                <u>しごと</u>
                <span className="red-text">に</span>
                <span className="green-text">いきます</span>。(Tôi đi làm.)
              </li>{" "}
              <li>
                <u>がっこう</u>
                <span className="blue-text">へ</span> <u>べんきょうし</u>{" "}
                <span className="red-text">に</span>
                <span className="green-text">いきます</span>。(Tôi đi đến trường
                để học.)
              </li>{" "}
              <li>
                <u>としょかん</u>
                <span className="blue-text">へ</span> <u>ほんを よみ</u>
                <span className="red-text">に</span>
                <span className="green-text">いきます</span>。(Tôi đi đến thư
                viện để đọc sách.)
              </li>
            </ul>
          </div>
          <div className="alert alert-info">
            <strong>Lưu ý:</strong>
            <ul>
              <li>
                Nếu trước trợ từ &quot;
                <span>に</span>
                &quot; là một sự kiện, thì cả câu có thể hiểu là &quot;đi đến A
                để tham gia/xem sự kiện đó&quot;.
              </li>
              <li>
                Đối với danh-động từ (động từ có dạng danh từ-します), có thể bỏ
                ー(を)しに chỉ giữ lại phần danh từ. Ví dụ:
                <ul>
                  <li>
                    <span>かいもの</span>に いきます。(Đi mua sắm) - Thay vì{" "}
                    <span>かいものをし</span>に いきます。
                  </li>
                  <li>
                    <span className="red-text">さんぽ</span>に いきます。(Đi
                    dạo) - Thay vì <span className="red-text">さんぽをし</span>
                    に いきます。
                  </li>
                  <li>
                    <span className="red-text">べんきょう</span>に としょかんへ
                    いきます。(Đi học tại thư viện) - Thay vì
                    <span className="red-text">べんきょうをし</span>に
                    としょかんへ いきます。
                  </li>
                  <li>
                    <span className="red-text">しょくじ</span>に レストランへ
                    いきます。(Đi ăn tại nhà hàng) - Thay vì
                    <span className="red-text">しょくじをし</span>に
                    レストランへ いきます。
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>

        <div className="grammar-point">
          <h3>III. Quá khứ</h3>
          <h4>1. Động từ ở quá khứ</h4>
          <ul>
            <li>
              <strong>Khẳng định:</strong> Động từ + ました
            </li>
            <li>
              <strong>Phủ định:</strong> Động từ + ませんでした
            </li>
          </ul>
          <div className="example">
            <ul>
              <li>
                おととい、しんじゅくへいきました (Hôm kia, tôi đã đi Shinjuku)
              </li>
              <li>
                きのう、べんきょうしませんでした (Hôm qua, tôi đã không học)
              </li>
            </ul>
          </div>

          <h4>2 . Câu hỏi thăm về kinh nghiệm, tình trạng trong quá khứ</h4>
          <p>どうでしたか (thế nào)</p>
          <div className="example">
            <ul>
              <li>りょこうはどうでしたか (Chuyến du lịch thế nào?)</li>
            </ul>
          </div>
        </div>

        <div className="grammar-point">
          <h3>IV. Một số mẫu câu khác</h3>
          <ul>
            <li>
              <strong>Danh từ + が + すきです / きらいです:</strong> thích/ ghét
              cái gì đó (người nào đó)
              <div className="example">
                <ul>
                  <li>
                    わたしはにほんのアニメがすきです (Tôi thích phim hoạt hình
                    Nhật Bản)
                  </li>
                  <li>
                    わたしはかんたんなひとがきらいです (Tôi ghét người đơn giản)
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <strong>どうして:</strong> vì sao
              <div className="example">
                <ul>
                  <li>
                    どうしてあさ、なにもたべませんでしたか (Vì sao buổi sáng anh
                    không ăn gì hết vậy?)
                  </li>
                </ul>
              </div>
              <p>Trả lời câu hỏi どうして dùng から (vì)</p>
              <div className="example">
                <ul>
                  <li>いそがしかったですから (Vì tôi bận quá)</li>
                </ul>
              </div>
            </li>
            <li>
              <strong>それから:</strong> sau đó
              <div className="example">
                <ul>
                  <li>
                    きのう、こいびととえいがをみました。それから、しんじゅくのゆうめいなレストランでしょくじをしました
                    (Hôm qua, tôi đã xem phim với người yêu. Sau đó, dùng bữa
                    tại một nhà hàng nổi tiếng ở Shinjuku)
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <strong>Danh từ + と + Động từ-ます:</strong> làm gì đó với ai đó
              <div className="example">
                <ul>
                  <li>
                    しゅうまつ、ともだちとサッカーをします (Cuối tuần, tôi đã
                    cùng với bạn bè chơi đá bóng)
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="bai6" className="mb-5 animate__animated fade-in">
        <h2 className="text-center mb-4">Bài 6: So sánh</h2>

        <div className="grammar-point">
          <h3>I. So sánh hơn và so sánh kém</h3>{" "}
          <ul>
            <li>
              <strong>So sánh hơn:</strong> A は B より + Adj + です (A hơn B)
              <div className="example">
                にほんごはえいごよりむずかしいです (Tiếng Nhật khó hơn tiếng
                Anh).
              </div>
            </li>
            <li>
              <strong>
                So sánh kém (Dạy thêm không có trong chương trình):
              </strong>{" "}
              A は B ほど + Adj + です (A kém hơn B)
              <div className="example">
                えいごはにほんごほどむずかしくないです (Tiếng Anh không khó bằng
                tiếng Nhật).
              </div>
            </li>
          </ul>
        </div>
        <div className="grammar-point">
          <h3>II. So sánh nhất</h3>{" "}
          <ul>
            <li>
              <strong>Cấu trúc 1:</strong> Phạm vi （のなか） + で + Danh từ +
              が + いちばん + Tính từ + です.
            </li>
            <li>
              <strong>Ý nghĩa:</strong> Cấu trúc này dùng để diễn đạt rằng trong
              một phạm vi cụ thể, một danh từ là nhất về tính từ nào đó.
              <div className="example">
                日本のりょうりでスシがいちばんすきです (Trong các món ăn Nhật
                Bản, tôi thích nhất là sushi).
              </div>
            </li>
            <li>
              <strong>Cấu trúc 2:</strong> N + のなかで + A + が + いちばん +
              ... + です (Trong tập hợp N thì A là ... nhất).
              <div className="example">
                一年で八月がいちばんあついです (Trong 1 năm, tháng 8 là nóng
                nhất).
              </div>
            </li>
          </ul>
          <div className="alert alert-info">
            <strong>Lưu ý:</strong> N có thể là cụm N1 と N2 と N3 と ...{" "}
            <div>
              りんご<strong>と</strong>みかん<strong>と</strong>
              ぶどうの中で、りんごがいちばん好きです。
              <br />
              (Trong số táo, quýt và nho, tôi thích táo nhất.)
            </div>
          </div>
        </div>

        <div className="grammar-point">
          <h3>III. Câu hỏi so sánh</h3>
          <h4>1. Câu hỏi so sánh 2 đối tượng</h4>{" "}
          <ul>
            <li>
              <strong>Cấu trúc:</strong> A と B とどちらが + Adj + ですか (Giữa
              A và B, cái nào hơn?)
              <p className="text-justify">
                Câu hỏi này dùng khi bạn muốn so sánh hai đối tượng về một đặc
                điểm nào đó. Bạn hỏi xem đối tượng nào trong số hai đối tượng có
                tính chất nổi bật hơn.
              </p>
              <div className="example">
                英語と日本語とどちらがむずかしいですか。(Tiếng Anh và tiếng
                Nhật, tiếng nào khó hơn?)
              </div>
            </li>
            <li>
              <strong>Cách trả lời:</strong> N のほうが + Adj + です (N thì hơn
              về...)
              <div className="example">
                日本語のほうがむずかしいです。(Tiếng Nhật thì khó hơn.)
              </div>
            </li>
          </ul>
          <h4>2. Câu hỏi so sánh nhất</h4>
          <ul>
            <li>
              <strong>Cấu trúc:</strong> N で + nghi vấn từ
              (なに/いつ/どこ/だれ) がいちばん + Adj + ですか (Trong tập hợp N,
              cái gì/khi nào/ở đâu/ai là ... nhất?)
            </li>{" "}
            <li>
              <strong>Nghi vấn từ thường dùng:</strong>
              <ul>
                <li>なに (cái gì): Dùng khi hỏi về vật.</li>
                <li>いつ (khi nào): Dùng khi hỏi về thời gian.</li>
                <li>どこ (ở đâu): Dùng khi hỏi về địa điểm.</li>
                <li>だれ (ai): Dùng khi hỏi về người.</li>
              </ul>
              <div className="example">
                一年でいつがいちばんあついですか。(Trong một năm, khi nào nóng
                nhất?)
              </div>
            </li>{" "}
            <li>
              <strong>Cách trả lời:</strong>
              <div className="example">
                八月がいちばんあついです。(Tháng 8 là tháng nóng nhất.)
              </div>
            </li>
          </ul>
          <div className="alert alert-info">
            <strong>Lưu ý:</strong> Khi so sánh giữa 2 đối tượng, luôn có sự
            xuất hiện của どちら (để hỏi &quot;cái nào&quot;) và dùng A と B と
            để liệt kê hai đối tượng.
          </div>
        </div>

        <div className="grammar-point">
          <h3>IV. Một số mẫu câu và cấu trúc khác</h3>
          <div className="timeline-container">
            <h3>Ngày</h3>
            <div className="timeline">
              <div className="timeline-item" data-text="おととい (ototoi)">
                <span className="timeline-date">Hôm kia</span>
              </div>
              <div className="timeline-item" data-text="きのう (kinou)">
                <span className="timeline-date">Hôm qua</span>
              </div>
              <div className="timeline-item active" data-text="きょう (kyou)">
                <span className="timeline-date">Hôm nay</span>
              </div>
              <div className="timeline-item" data-text="あした (ashita)">
                <span className="timeline-date">Ngày mai</span>
              </div>
              <div className="timeline-item" data-text="あさって (asatte)">
                <span className="timeline-date">Ngày mốt</span>
              </div>
            </div>
          </div>
          <div className="timeline-container">
            <h3>Tháng</h3>
            <div className="timeline">
              <div className="timeline-item" data-text="せんげつ (sengetsu)">
                <span className="timeline-date">Tháng trước</span>
              </div>
              <div
                className="timeline-item active"
                data-text="こんげつ (kongetsu)"
              >
                <span className="timeline-date">Tháng này</span>
              </div>
              <div className="timeline-item" data-text="らいげつ (raigetsu)">
                <span className="timeline-date">Tháng sau</span>
              </div>
            </div>
          </div>
          <div className="timeline-container">
            <h3>Năm</h3>
            <div className="timeline">
              <div className="timeline-item" data-text="きょねん (kyonen)">
                <span className="timeline-date">Năm ngoái</span>
              </div>
              <div
                className="timeline-item active"
                data-text="ことし (kotoshi)"
              >
                <span className="timeline-date">Năm nay</span>
              </div>
              <div className="timeline-item" data-text="らいねん (rainen)">
                <span className="timeline-date">Năm sau</span>
              </div>
            </div>
          </div>{" "}
          <ul>
            <li>
              <strong>V_ませんか:</strong> (Rủ rê, mời mọc) Làm gì đó không?
              <div className="example">
                こんばんいっしょにごはんをたべにいきませんか。(Tối nay cùng nhau
                đi ăn cơm không?)
                <br />
                <br />
                いいですね。いきましょう。(Vâng, đi thôi.)
                <br />
                <br />
                すみません。きょうはちょっと…。(Xin lỗi, hôm nay thì...)
              </div>
            </li>

            <li>
              <strong>V_ましょう:</strong> (Kêu gọi) Cùng làm gì đó đi.
              <div className="example">
                こんばんカラオケにいきましょう。(Tối nay đi hát karaoke đi.)
              </div>
            </li>

            <li>
              <strong>Từ chối lời mời:</strong> ...はちょっと...
            </li>
            <div className="example">
              すみません、なつやすみはちょっと…くににかえりますから。(Xin lỗi,
              kì nghỉ hè thì…Mình phải về nước rồi.)
            </div>

            <li>
              <strong>Danh từ + が + あります:</strong> Có ~ (sự vật/ sự việc)
            </li>
            <div className="example">
              あした、ともだちとやくそくがあります。(Ngày mai tôi có hẹn với
              bạn.)
            </div>

            <li>
              <strong>Nơi Chốn + で + Sự kiện + があります:</strong> Ở (nơi
              chốn) có (sự kiện)
            </li>
            <div className="example">
              らいげつのふつか、よこはまでサッカーのしあいがあります。(Ngày 2
              tháng sau, ở Yokohama có trận đá bóng.)
            </div>

            <li>
              <strong>Danh từ + が + (Lượng từ) + あります:</strong> Có (số
              lượng) cái gì đó
            </li>
            <div className="example">
              コンサートのチケットが2まいあります。(Tôi có 2 chiếc vé concert.)
            </div>

            <li>
              <strong>もう + Động từ + ました:</strong> Đã làm gì đó rồi
            </li>
            <div className="example">
              しゅくだいをもうしましたか。(Bạn đã làm bài tập rồi chưa?)
            </div>

            <li>
              <strong>Chưa:</strong> まだ
            </li>
            <div className="example">
              いいえ、まだです。(Chưa, chưa làm nữa)
            </div>

            <li>
              <strong>Danh từ + は + どうですか:</strong> (Đề xuất, đưa ý kiến)
              (Danh từ) thì thế nào?
            </li>
            <div className="example">
              やきにくはどうですか。(Thịt nướng thì thế nào?)
            </div>

            <li>
              <strong>.... + ね:</strong> (1) Kêu gọi sự đồng tình (2) Xác nhận
              thông tin
            </li>
            <div className="example">
              5じにあいましょう。(Gặp nhau lúc 5 giờ nào)
              <br />
              5じですね。わかりました。(5 giờ ha? Đã hiểu.)
            </div>

            <li>
              <strong>.... + よ:</strong> (1) Đưa ra thông tin mới (2) Nhấn mạnh
              ý kiến, tình cảm
            </li>
            <div className="example">
              あしたはにちようびですよ。(Ngày mai là Chủ nhật đấy.)
            </div>
          </ul>
        </div>
      </section>

      <section id="bai7" className="mb-5 animate__animated fade-in">
        <h2 className="text-center mb-4">Bài 7: Động từ thể て</h2>
        <div className="grammar-point">
          <h3>Chia động từ thể て</h3>
          <table className="table table-bordered table-hover mt-4">
            <thead className="thead-light">
              <tr>
                <th>Nhóm</th>
                <th>Quy tắc</th>
                <th>Ví dụ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={6}>Nhóm 1: Động từ kết thúc bằng âm い</td>
                <td>い, ち, り: Bỏ い, thêm って</td>
                <td>
                  まちます (đợi) → まって
                  <br />
                  のります (lên) → のって
                  <br />
                  かいます (mua) → かって
                </td>
              </tr>
              <tr>
                <td> み, び, に: Bỏ い, thêm んで</td>
                <td>
                  あそびます (chơi) → あそんで
                  <br />
                  のみます (uống) → のんで
                </td>
              </tr>
              <tr>
                <td>き: Bỏ い, thêm いて</td>
                <td>かきます (viết) → かいて</td>
              </tr>
              <tr>
                <td>ぎ: Bỏ い, thêm いで</td>
                <td>およぎます (bơi) → およいで</td>
              </tr>
              <tr>
                <td>し: Bỏ い, thêm して</td>
                <td>はなします (nói) → はなして</td>
              </tr>
              <tr>
                <td>い (động từ đặc biệt)</td>
                <td>いきます (đi) → いって</td>
              </tr>
              <tr>
                <td>Nhóm 2</td>
                <td>Âm đuôi え và động từ bất quy tắc: Thay bằng て</td>
                <td>
                  たべます (ăn) → たべて (ăn)
                  <br />
                  おきます (thức dậy) → おきて (thức dậy)
                  <br />
                  みます (xem) → みて (xem)
                </td>
              </tr>
              <tr>
                <td rowSpan={2}>Nhóm 3</td>
                <td>します (làm)</td>
                <td>して</td>
              </tr>
              <tr>
                <td>きます (đến)</td>
                <td>きて</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="grammar-point">
          <h3>Cách dùng động từ thể て</h3>
          <div className="usage-list">
            <div className="usage-item">
              <h4>V_て + ください</h4>
              <p>Dùng để yêu cầu hoặc đề nghị ai đó làm gì.</p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> 本を読んでください。
                </p>
                <p>
                  <em>Nghĩa:</em> Xin hãy đọc sách.
                </p>
              </div>
            </div>
            <div className="usage-item">
              <h4>V_て + います</h4>
              <p>Dùng để diễn tả hành động đang diễn ra.</p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> 私は今テレビを見ています。
                </p>
                <p>
                  <em>Nghĩa:</em> Tôi đang xem tivi.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grammar-point">
          <h3 className="mb-4">Một số mẫu câu khác</h3>
          <div className="sentence-patterns">
            <div className="pattern-item mb-4">
              <h4 className="pattern-title">
                (Danh từ + の) + Động từ thể ます + 方
              </h4>
              <p className="pattern-description">Cách (làm gì đó)</p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> にほんごのはなしかたをおしえてください
                </p>
                <p>
                  <em>Nghĩa:</em> Hãy chỉ tôi cách nói tiếng Nhật
                </p>
              </div>
            </div>
            <div className="pattern-item mb-4">
              <h4 className="pattern-title">
                Người/Con vật + は + Nơi chốn + に + います
              </h4>
              <p className="pattern-description">
                [người/ con vật] ở [nơi chốn] (nhấn mạnh vào sự tồn tại của chủ
                thể là người/ con vật)
              </p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> いぬはこうえんにいます
                </p>
                <p>
                  <em>Nghĩa:</em> Con chó ở trong công viên
                </p>
              </div>
            </div>
            <div className="pattern-item mb-4">
              <h4 className="pattern-title">
                Đồ vật + は + Nơi chốn + に + あります
              </h4>
              <p className="pattern-description">
                [đồ vật] ở [nơi chốn] (nhấn mạnh vào sự tồn tại của chủ thể là
                đồ vật)
              </p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> ほんはつくえのうえにあります
                </p>
                <p>
                  <em>Nghĩa:</em> Quyển sách ở trên bàn
                </p>
              </div>
            </div>
            <div className="pattern-item mb-4">
              <h4 className="pattern-title">
                Nơi chốn + に + Người/Con vật + が + います
              </h4>
              <p className="pattern-description">
                Ở [nơi chốn] có [người/ con vật] (nhấn mạnh vào nơi chốn)
              </p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> へやにねこがいます
                </p>
                <p>
                  <em>Nghĩa:</em> Trong phòng có con mèo
                </p>
              </div>
            </div>
            <div className="pattern-item mb-4">
              <h4 className="pattern-title">
                Nơi chốn + に + Đồ vật + が + あります
              </h4>
              <p className="pattern-description">
                Ở [nơi chốn] có [đồ vật] (nhấn mạnh vào nơi chốn)
              </p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> いえのちかくにがっこうがあります
                </p>
                <p>
                  <em>Nghĩa:</em> Gần nhà có một trường học
                </p>
              </div>
            </div>
            <div className="pattern-item mb-4">
              <h4 className="pattern-title">だれ + が</h4>
              <p className="pattern-description">
                Nhấn mạnh vào đối tượng là chủ thể của câu (ở đây là người nào)
              </p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> だれがにほんごをはなしますか
                </p>
                <p>
                  <em>Nghĩa:</em> Ai nói tiếng Nhật?
                </p>
              </div>
            </div>
            <div className="pattern-item mb-4">
              <h4 className="pattern-title">どの + Danh từ</h4>
              <p className="pattern-description">Cái Danh từ nào</p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> どのほんですか
                </p>
                <p>
                  <em>Nghĩa:</em> Quyển sách nào vậy?
                </p>
              </div>
            </div>
            <div className="pattern-item mb-4">
              <h4 className="pattern-title">
                Phương tiện/ Dụng cụ + で + Động từ-ます
              </h4>
              <p className="pattern-description">
                Làm gì đó bằng [phương tiện/ dụng cụ]
              </p>
              <div className="example">
                <p>
                  <strong>Ví dụ:</strong> はしでさかなをたべます
                </p>
                <p>
                  <em>Nghĩa:</em> Ăn cá bằng đũa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
