const FlatListData = [

  {
    category: 'card',
    data: [
      {
        title: 'Common use functions',
        icon: "functions",
        vi: "Hàm excel thông dụng",
        data: [
          {
            title: "Count and Sum",
            icon: "sigma",
            description_en: "The most used functions in Excel are the functions that count and sum. You can count and sum based on one criteria or multiple criteria.",
            description_vi: "Các hàm được sử dụng nhiều nhất trong Excel là các hàm đếm và tổng. Bạn có thể đếm và tính tổng dựa trên một tiêu chí hoặc nhiều tiêu chí.",
            data: [
              {
                title: "COUNT",
                description_vi: "Để đếm số ô có chứa số, hãy sử dụng hàm COUNT.",
                syntax: {
                  syntax_fomular: "=COUNT(value1, [value2], ...)",
                  detail_1: "value1 (bắt buộc): Mục đầu tiên, tham chiếu ô hoặc phạm vi trong đó bạn muốn đếm số.",
                  detail_2: "value2, ... (tùy chọn): Tối đa 255 mục, tham chiếu ô hoặc phạm vi bổ sung trong đó bạn muốn đếm số.",
                  detail_3: "Lưu ý: Các đối số có thể chứa hoặc tham chiếu đến các kiểu dữ liệu khác nhau nhưng chỉ các số mới được đếm.",
                  detail_4: "",
                },
                example: {
                  detail_1: `=COUNT(A2:A9) Đếm số ô chứa số trong các ô từ A2 tới A9.`,
                  detail_2: `=COUNT(A2:A7,5) Đếm số ô chứa số trong các ô từ A2 tới A7 và giá trị 5`,
                },
                note: "Để đếm các ô trống và không trống trong Excel, hãy sử dụng COUNTBLANK và COUNTA.",
                explanation: `Hàm COUNT bỏ qua ký tự "a" (A1), "TRUE" (A6) và rỗng (A7). Kết quả chỉ đếm số là 5.`,
              },
              {
                title: "COUNTIF",
                description_vi: "Để đếm ô dựa trên một tiêu chí, hãy sử dụng hàm COUNTIF.",
                syntax: {
                  syntax_fomular: "=COUNTIF(range, criteria)",
                  detail_1: "range: vùng tìm kiếm để đếm",
                  detail_2: "criteria: giá trị cần đếm trong vùng tìm kiếm",
                  detail_3: "",
                  detail_4: "",
                },
                example: {
                  detail_1: `=COUNTIF(A2:A5,"táo") Đếm số ô có chứa táo trong các ô từ A2 tới A5`,
                  detail_2: `=COUNTIF(A2:A5,A4) Đếm số ô chứa giá trị trong A4, trong các ô từ A2 tới A5`,
                },
                note: "",
                explanation: `COUNTIF đếm 2 giá trị lớn hơn 5 đó là 8 (A1), và 10 (A5).`,
              },
              {
                title: "COUNIFS",
                description_vi: "Để đếm các hàng dựa trên nhiều tiêu chí hãy sử dụng hàm COUNTIFS",
                syntax: {
                  syntax_fomular: "COUNTIFS(criteria_range1, criteria1, [criteria_range2, criteria2],…)",
                  detail_1: "criteria_range1: Bắt buộc. Phạm vi thứ nhất trong đó cần đánh giá các tiêu chí liên kết.",
                  detail_2: `criteria1: Bắt buộc. Tiêu chí dưới dạng một số, biểu thức, tham chiếu ô hoặc văn bản để xác định những ô nào cần đếm. Ví dụ: tiêu chí có thể được biểu thị là 32, ">32", B4, "táo" hoặc "32".`,
                  detail_3: `criteria_range2, criteria2, ... Tùy chọn. Những phạm vi bổ sung và tiêu chí liên kết của chúng. Cho phép tối đa 127 cặp phạm vi/tiêu chí.`,
                  detail_4: "",
                },
                example: {
                  detail_1: `=COUNTIFS(A1:A8,"<6",A1:A8,">1") Đếm xem từ ô A1 đến ô A8 có bao nhiêu số ở giữa 1 và 6 (không bao gồm 1 và 6).`,
                  detail_2: ``,
                },
                note: "",
                explanation: "Trong vùng A1:A5 đếm có 2 màu vàng, nhưng giá trị của màu vàng > 5 chỉ có 1, cho nên kết quả bằng 1.",
              },
              {
                title: "SUM",
                description_vi: "Để tính tổng một dải ô, hãy sử dụng hàm SUM.",
                syntax: {
                  syntax_fomular: "=SUM (number 1, number 2, …)",
                  detail_1: "number 1, number 2, …:là các đối số mà bạn muốn tính tổng.",
                  detail_2: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: `=SUM (1, 2, 3) có giá trị bằng 6.`,
                  detail_2: ``,
                },
                note: "",
                explanation: "Hàm sum cộng tất cả các giá trị là số (9+5+5) và bỏ qua ký tự,rỗng hay kiểu TRUE, FALSE.",
              },
              {
                title: "SUMIF",
                description_vi: "Để tính tổng các ô dựa trên một tiêu chí hãy sử dụng hàm SUMIF.",
                syntax: {
                  syntax_fomular: "=SUMIF(range, criteria, sum_range)",
                  detail_1: `range: Phạm vi các ô bạn muốn áp dụng tiêu chí criteria.`,
                  detail_2: `criteria: Là Tiêu chí xác lập điều kiện cho giá trị được tính tổng. Nó có thể là số, biểu thức hoặc một chuỗi văn bản.`,
                  detail_3: `sum_range: Vùng cần tính tổng hay dải ô cần tính tổng.`,
                  detail_4: "",
                },
                example: {
                  detail_1: `=SUMIF(A2:A5,">160000") Tổng các giá trị từ A2:A5 mà lớn hơn 160.000.`,
                  detail_2: ``,
                },
                note: "",
                explanation: "",
              },
              {
                title: "SUMIFS",
                description_vi: "Để tính tổng các ô dựa trên nhiều tiêu chí (ví dụ: hình tròn và màu đỏ), hãy sử dụng hàm SUMIFS sau (đối số đầu tiên là phạm vi cần tính tổng).",
                syntax: {
                  syntax_fomular: "=SUMIFS(sum_range,criteria_range1,criteria1,criteria_range2,criteria2,…).",
                  detail_1: `sum_range (bắt buộc ): Phạm vi ô cần tính tổng.`,
                  detail_2: `criteria_range1 (bắt buộc): Phạm vi được kiểm tra bằng cách sử dụng criteria1`,
                  detail_3: `Criteria_range2, criteria2, …(tùy chọn): Các phạm vi bổ sung và các tiêu chí liên kết với chúng. Bạn có thể nhập tối đa 127 cặp phạm vi/tiêu chí.`,
                  detail_4: "",
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "",
              },
            ]
          },
          {
            title: "Hàm Logic",
            icon: "exclamation-thick",
            description_en: "Learn how to use Excel's logical functions, such as IF, AND, OR and NOT.",
            description_vi: "Tìm hiểu cách sử dụng các hàm logic của Excel, chẳng hạn như IF, AND, OR và NOT.",
            data: [
              {
                title: "IF",
                description_vi: "Hàm IF kiểm tra xem một điều kiện có được đáp ứng hay không và trả về một giá trị nếu đúng và một giá trị khác nếu sai.",
                syntax: {
                  syntax_fomular: `=IF(logical_test,[value_if_true],[value_if_false])`,
                  detail_1: "Logical_test là điều kiện kiểm tra.",
                  detail_2: `Value_if_true là giá trị nếu điều kiện đúng.`,
                  detail_3: `Value_if_false là giá trị nếu điều kiện sai.`,
                  detail_4: ``,
                },
                example: {
                  detail_1: `IF(E7="Cam";"Có";"Không") Hàm If kiểm tra ô E7 nếu giá trị là "Cam" thì sẽ trả về kết quả là "Có", ngược lại là "không"`,
                  detail_2: ``,
                },
                note: "",
                explanation: `Nếu màu là màu "Trắng" hàm IF sẽ trả về "Đúng", còn không thì trả về "Sai"`,

              },
              {
                title: "AND",
                description_vi: "Hàm AND trả về TRUE nếu tất cả các điều kiện là đúng và trả về FALSE nếu bất kỳ điều kiện nào là sai.",
                syntax: {
                  syntax_fomular: "= AND(logical 1, logical 2, …)",
                  detail_1: "logical1: Đối số hay điều kiện số 1",
                  detail_2: `logical2: Đối số hay điều kiện số 2`,
                  detail_3: `….: Các điều kiện tiếp theo`,
                  detail_4: "",
                },
                example: {
                  detail_1: `= AND(1>2, 2<3) Sẽ trả về kết quả FALSE do 1 điều kiện bị sai (1>2)`,
                  detail_2: `= AND(1<2, 2<3) Sẽ trả về kết quả TRUE do cả 2 điều kiện đều đúng`,
                },
                note: "",
                explanation: "Giải thích: Hàm AND trả về TRUE nếu điểm đầu tiên lớn hơn 20 và điểm thứ hai lớn hơn 5, nếu không thì trả về FALSE.",

              },
              {
                title: "OR",
                description_vi: "Hàm OR trả về TRUE nếu bất kỳ điều kiện nào là TRUE và trả về FALSE nếu tất cả các điều kiện đều FALSE.",
                syntax: {
                  syntax_fomular: "=OR (logical 1, [logical 2], …)",
                  detail_1: `logical 1 (bắt buộc): Là một giá trị logic.`,
                  detail_2: `Logical 2 (tùy chọn): Là một giá trị logic. Có thể lên tới 255 điều kiện khác nhau.`,
                  detail_3: "",
                  detail_4: "",
                },
                example: {
                  detail_1: `=OR(1+1=3,2+4=6) sẽ trả về TRUE do tất cả điều kiện là TRUE.`,
                  detail_2: ``,
                },
                note: "",
                explanation: "Hàm OR trả về TRUE nếu it nhất một số lớn hơn 5, nếu không thì trả về FALSE.",

              },
              {
                title: "NOT",
                description_vi: "Hàm NOT thay đổi TRUE thành FALSE và FALSE thành TRUE.",
                syntax: {
                  syntax_fomular: "=NOT(logical)",
                  detail_1: "logical: là giá trị Logic (TRUE/ FALSE).",
                  detail_2: ``,
                  detail_3: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: `=NOT(5>100) sẽ trả về TRUE do kết quả của phép so sánh 5>100 trả về FALSE. Hàm NOT sẽ phủ định ngược lại và trả về TRUE.`,
                  detail_2: ``,
                },
                note: "",
                explanation: " Kết quả của hàm OR trả về là TRUE, sau đó hàm NOT phủ định ngược lại và trả về FALSE.",
              },
            ]
          },
          {
            title: "Hàm Date & Time",
            icon: "clock-time-five",
            description_en: "",
            description_vi: `Cách sử dụng các hàm Year, Month, Day | Date Function | Current Date & Time | Hour, Minute, Second | Time Function`,
            data: [
              {
                title: "Bắt đầu",
                description_vi: `Để nhập ngày tháng trong Excel, hãy sử dụng các ký tự "/" hoặc "-". Để nhập thời gian, hãy sử dụng ":" (dấu hai chấm). Bạn cũng có thể nhập ngày và giờ vào một ô`,
                syntax: {
                  syntax_fomular: ``,
                  detail_1: ``,
                  detail_2: ``,
                  detail_3: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "Ngày ở Định dạng US. Tháng đầu tiên, Ngày sau. Loại định dạng này phụ thuộc vào cài đặt khu vực cửa sổ của bạn. Hãy tìm hiểu thêm về các định dạng Ngày và Giờ",
              },
              {
                title: "YEAR, MONTH, DAY",
                description_vi: `Để lấy năm của một ngày, hãy sử dụng hàm YEAR.`,
                syntax: {
                  syntax_fomular: "=YEAR(serial_number)",
                  detail_1: `Serial_number (bắt buộc): Ngày trong năm mà bạn muốn tìm. Ngày tháng nên được nhập bằng cách sử dụng hàm DATE hoặc nhập như là kết quả của những công thức hay hàm khác. Ví dụ, sử dụng DATE(2008,5,23) cho ngày 23 tháng năm năm 2008. Vấn đề có thể xảy ra nếu nhập ngày tháng dạng văn bản.`,
                  detail_2: `Excel lưu trữ ngày tháng ở dạng số sê-ri liên tiếp theo ngày (theo mặc định ngày 1/1/1990 có số sê-ri là 1) để sử dụng trong tính toán.`,
                  detail_3: `Giá trị trả về bởi hàm YEAR sẽ là giá trị dương lịch bất kể định dạng hiển thị cho giá trị ngày tháng đã cung cấp như thế nào.`,
                  detail_4: "",
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "Với cách sử dụng tượng tự, hãy dùng hàm MONTH và DAY để lấy tháng và ngày của một ngày.",
              },
              {
                title: "DATE",
                description_vi: `1. Để thêm một số ngày vào một ngày, hãy sử dụng hàm DATE`,
                syntax: {
                  syntax_fomular: "=DATE(year,month,day)",
                  detail_1: `year (bắt buộc): Giá trị của tham đối năm có thể bao gồm từ một đến bốn chữ số. Excel diễn giải tham đối năm theo hệ thống ngày tháng mà máy tính của bạn đang sử dụng. Theo mặc định, Microsoft Excel for Windows sử dụng hệ thống ngày tháng 1900, có nghĩa là ngày đầu tiên là 01/01/1900.`,
                  detail_2: `month (bắt buộc): Số nguyên dương hoặc âm đại diện cho tháng trong năm từ 1 đến 12 (Tháng Một đến Tháng Mười Hai).`,
                  detail_3: `day (bắt buộc): Số nguyên dương hoặc âm đại diện cho ngày của tháng từ 1 đến 31.`,
                  detail_4: "Lưu ý: Excel lưu trữ ngày tháng dưới dạng số sê-ri liên tiếp để có thể sử dụng trong tính toán. 01/01/1900 có số sê-ri là 1 và 01/01/2008 có số sê-ri là 39448 vì ngày đó ở sau 01/01/1900 39.447 ngày. Bạn sẽ cần thay đổi định dạng số (Định dạng Ô) để hiển thị ngày tháng đúng cách.",
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "",
              },
              {
                title: "NOW",
                description_vi: `Để biết ngày và giờ hiện tại, hãy sử dụng chức năng NOW.`,
                syntax: {
                  syntax_fomular: "=NOW() Cú pháp hàm NOW không có đối số nào.",
                  detail_1: ``,
                  detail_2: ``,
                  detail_3: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: `=NOW() Trả về ngày và thời gian hiện tại.`,
                  detail_2: `=NOW()+5 Trả về ngày và thời gian 5 ngày trong tương lai.`,
                },
                note: "Kết quả của hàm NOW chỉ thay đổi khi trang tính được tính toán hoặc khi macro chứa hàm đó chạy. Nó không được cập nhật liên tục.",
                explanation: "",
              },
              {
                title: "HOUR, MINUTE, SECOND",
                description_vi: `Để lấy giờ, hãy sử dụng hàm HOUR.`,
                syntax: {
                  syntax_fomular: "=HOUR(serial_number)",
                  detail_1: `serial_number (bắt buộc): Thời gian có chứa giờ mà bạn muốn tìm. Thời gian có thể được nhập vào dưới dạng chuỗi văn bản đặt trong dấu ngoặc kép, (ví dụ "6:45 CH"), dạng số thập phân (ví dụ 0,78125, biểu thị cho 6:45 CH) hoặc dạng kết quả của các công thức hoặc hàm khác (ví dụ TIMEVALUE("6:45 PM")).`,
                  detail_2: ``,
                  detail_3: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: `HOUR(0.5) Trả về 50% của 24 giờ, kết quả là là 12h`,
                  detail_2: `HOUR(18/07/11 7:45) Trả về phần giờ của giá trị ngày/thời gian =7`,
                },
                note: "",
                explanation: "Lưu ý: sử dụng hàm MINUTE và SECOND để trả về phút và giây.",
              },
              {
                title: "TIME",
                description_vi: `Để thêm một số giờ, phút và / hoặc giây, hãy sử dụng chức năng TIME.`,
                syntax: {
                  syntax_fomular: "=TIME(hour, minute, second)",
                  detail_1: `hour (bắt buộc): Là một số từ 0 (không) đến 32767 thể hiện giờ. Mọi giá trị lớn hơn 23 sẽ được chia cho 24 và phần còn lại sẽ được coi là giá trị giờ. Ví dụ, TIME(27,0,0) = TIME(3,0,0) = ,125 hoặc 3:00 SA.`,
                  detail_2: `minute (bắt buộc): Là một số từ 0 đến 32767 thể hiện phút. Mọi giá trị lớn hơn 59 sẽ được chuyển đổi thành giờ và phút. Ví dụ, TIME(0,750,0) = TIME(12,30,0) = ,520833 hoặc 12:30 CH`,
                  detail_3: `second (bắt buộc): Là một số từ 0 đến 32767 thể hiện giây. Mọi giá trị lớn hơn 59 sẽ được chuyển đổi thành giờ, phút và giây. Ví dụ, TIME(0,0,2000) = TIME(0,33,22) = ,023148 hoặc 12:33:20 SA`,
                  detail_4: "",
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "Lưu ý: Excel cộng thêm 1 giờ, 1 phút và 1 giây.",
              },
              {
                title: "DATEDIF",
                description_vi: `Để nhận số ngày, tuần hoặc năm giữa hai ngày trong Excel, hãy sử dụng hàm DATEDIF. Hàm DATEDIF có ba đối số.`,
                syntax: {
                  syntax_fomular: "=DATEDIF(start_date,end_date,unit)",
                  detail_1: `start_date (bắt buộc): Ngày tháng đầu tiên hoặc ngày bắt đầu của một khoảng thời gian đã cho. Ngày tháng có thể được nhập ở dạng chuỗi văn bản trong dấu ngoặc kép (ví dụ, "30/1/2001" ), dưới dạng số sê-ri (ví dụ, 36921, biểu thị cho ngày 30 tháng 1 năm 2001,`,
                  detail_2: `end_date (bắt buộc): Ngày đại diện cho ngày cuối cùng hoặc ngày kết thúc khoảng thời gian.`,
                  detail_3: `unit : Loại thông tin mà bạn muốn trả về, trong đó: "Y" - Số năm hoàn tất trong khoảng thời gian. "M" -Số tháng hoàn tất trong khoảng thời gian. "D" - Số ngày trong khoảng thời gian. Ngoài ra còn có các kiểu MD, YD, Yd.`,
                  detail_4: ``,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "Lưu ý: A2-A1 tạo ra cùng một kết quả!",
                explanation: "d: day, m: month, y: year",
              },
              {
                title: "TODAY",
                description_vi: `Để nhập ngày hôm nay trong Excel, hãy sử dụng hàm TODAY.`,
                syntax: {
                  syntax_fomular: "=TODAY() hàm TODAY không có đối số.",
                  detail_1: ``,
                  detail_2: ``,
                  detail_3: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: `=TODAY() Trả về ngày hiện tại.`,
                  detail_2: `=DAY(TODAY()) Trả về ngày hiện tại trong tháng (1 - 31). Nếu hôm nay là ngày 30 thì kết quả sẽ là 30.`,
                },
                note: "Cũng giống như hàm NOW() sẽ tự động cập nhật khi bạn mở sổ làm việc vào một ngày khác.",
                explanation: "",
              },
              {
                title: "WEEKDAY",
                description_vi: `Hàm WEEKDAY trong Excel trả về một số từ 1 (Chủ Nhật) đến 7 (Thứ Bảy) đại diện cho ngày trong tuần của một ngày. Rõ ràng, ngày 24/09/2021 rơi vào thứ Sáu.
                `,
                syntax: {
                  syntax_fomular: "=WEEKDAY(serial_number,[return_type])",
                  detail_1: `serial_number (bắt buộc): Là một số tuần tự thể hiện ngày tháng của ngày bạn đang tìm kiếm. Ngày tháng nên được nhập bằng cách sử dụng hàm DATE hoặc nhập như là kết quả của những công thức hay hàm khác. Ví dụ, sử dụng DATE(2008,5,23) cho ngày 23 tháng năm năm 2008. Vấn đề có thể xảy ra nếu nhập ngày tháng dạng văn bản.`,
                  detail_2: `return_type (tùy chọn): Là một số xác định kiểu giá trị trả về.`,
                  detail_3: `1 hoặc bỏ qua Là các số từ 1 (chủ nhật) đến 7 (thứ bảy). Hoạt động giống với các phiên bản Microsoft Excel trước đây.

2: Là các số từ 1 (thứ hai) đến 7 (chủ nhật).
                  
3: Là các số từ 0 (thứ hai) đến 6 (chủ nhật).
                  
11: Là các số từ 1 (thứ hai) đến 7 (chủ nhật).
                  
12: Là các số từ 1 (thứ ba) đến 7 (thứ hai).
                  
13: Là các số từ 1 (thứ tư) đến 7 (thứ ba).

14: Là các số từ 1 (thứ năm) đến 7 (thứ tư).
                  
15: Là các số từ 1 (thứ sáu) đến 7 (thứ năm).
                  
16: Là các số từ 1 (thứ bảy) đến 7 (thứ sáu).
                  
17: Là các số từ 1 (chủ nhật) đến 7 (thứ bảy).`,
                  detail_4: "",
                },
                example: {
                  detail_1: `=WEEKDAY(14/02/2008) Ngày trong tuần, thể hiện bằng các số từ 1 (Chủ nhật) đến 7 (Thứ bảy) (5). Kết quả là 5`,
                  detail_2: ``,
                },
                note: "",
                explanation: "",
              },
              {
                title: "NETWORKDAYS",
                description_vi: `Hàm NETWORKDAYS trả về số ngày trong tuần (không bao gồm các ngày cuối tuần) giữa hai ngày.`,
                syntax: {
                  syntax_fomular: "=NETWORKDAYS(start_date, end_date, [holidays])",
                  detail_1: `start_date (bắt buộc): Ngày biểu thị ngày bắt đầu.`,
                  detail_2: `end_date (bắt buộc): Ngày biểu thị ngày kết thúc.`,
                  detail_3: `Holidays (tùy chọn): Một phạm vi tùy chọn gồm một hoặc nhiều ngày cần loại trừ ra khỏi lịch làm việc, chẳng hạn như ngày lễ, tết. Danh sách có thể là một phạm vi ô có chứa các ngày hoặc một hằng số mảng gồm các số sê-ri biểu thị ngày.`,
                  detail_4: "",
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "",
              },
              {
                title: "EOMONTH",
                description_vi: `Để lấy ngày của ngày cuối cùng của tháng trong Excel, hãy sử dụng hàm EOMONTH (Cuối tháng)`,
                syntax: {
                  syntax_fomular: "=EOMONTH(start_date, months)",
                  detail_1: `start_date (bắt buộc): Ngày biểu thị ngày bắt đầu. Nên nhập ngày bằng cách sử dụng hàm DATE hoặc sử dụng kết quả của những công thức hay hàm khác. Ví dụ: sử dụng DATE(2008;5;23) cho 23/05/2008. Có thể xảy ra sự cố khi nhập ngày tháng dưới dạng văn bản.`,
                  detail_2: `months (bắt buộc): Số tháng trước hoặc sau start_date. Giá trị dương cho đối số months tạo ra ngày trong tương lai; giá trị âm tạo ra ngày trong quá khứ.`,
                  detail_3: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                }, note: "",
                explanation: "",
              },
            ]
          },
          {
            title: "Hàm chuổi văn bản Text/String",
            icon: "format-text",
            description_en: "",
            description_vi: `Excel cung cấp nhiều hàm để thao tác với các chuỗi văn bản như Join|Strings|Left|Right|Mid|Len|Find|Substitute`,
            data: [
              {
                title: "Join Strings",
                description_vi: `Để nối các chuỗi, hãy sử dụng toán tử &.`,
                note: "Lưu ý: thay vì sử dụng toán tử &, hãy sử dụng hàm CONCATENATE trong Excel.",
                explanation: "",
              },
              {
                title: "LEFT",
                description_vi: `Để trích xuất các ký tự ngoài cùng bên trái từ một chuỗi, hãy sử dụng hàm LEFT.`,
                syntax: {
                  syntax_fomular: `=LEFT(text, [num_chars])`,
                  detail_1: `text (bắt buộc): Chuỗi văn bản có chứa các ký tự mà bạn muốn trích xuất.`,
                  detail_2: `Num_chars (tùy chọn): Chỉ rõ số ký tự mà bạn muốn hàm LEFT trích xuất.
- Num_chars phải lớn hơn hoặc bằng không.  

- Nếu num_chars lớn hơn độ dài của văn bản, hàm LEFT trả về toàn bộ văn bản.     

- Nếu num_chars được bỏ qua, thì nó được giả định là 1.`,
                  detail_3: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: `=LEFT("Xin chào";3) Trả về 3 ký tự đầu tiên trong chuỗi. Kết quả: "Xin"`,
                  detail_2: `=LEFT("Xin chào") Trả về ký tự đầu tiên trong chuỗi. Kết quả: "X"`,
                },
                note: "",
                explanation: "",
              },
              {
                title: "RIGHT",
                description_vi: `Để trích xuất các ký tự ngoài cùng bên phải từ một chuỗi, hãy sử dụng hàm RIGHT.`,
                syntax: {
                  syntax_fomular: `=RIGHT(text,[num_chars])`,
                  detail_1: `text (bắt buộc): Chuỗi văn bản có chứa các ký tự mà bạn muốn trích xuất.`,
                  detail_2: `Num_chars (tùy chọn): Chỉ rõ số ký tự mà bạn muốn hàm RIGHT trích xuất.

- Số ký tự phải lớn hơn hoặc bằng không.
                  
- Nếu số ký tự lớn hơn độ dài của văn bản, hàm RIGHT trả về toàn bộ văn bản.
                  
- Nếu số ký tự được bỏ qua, thì nó được giả định là 1.`,
                  detail_3: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: `=RIGHT("Xin chào",4) trả về 4 ký tự cuối cùng của chuỗi thứ nhất. Kết quả: "chào"`,
                  detail_2: `=RIGHT("Xin chào") Trả về ký tự cuối cùng của chuỗi. Kết quả "o"`,
                },
                note: "",
                explanation: "",
              },
              {
                title: "MID",
                description_vi: `Để trích xuất một chuỗi con, bắt đầu ở giữa một chuỗi, hãy sử dụng hàm MID.`,
                syntax: {
                  syntax_fomular: `=MID(text, start_num, num_chars)`,
                  detail_1: `text (bắt buộc): Chuỗi văn bản có chứa các ký tự mà bạn muốn trích xuất.`,
                  detail_3: `start_num (bắt buộc): Vị trí của ký tự thứ nhất mà bạn muốn trích xuất trong văn bản. Ký tự thứ nhất trong chuỗi văn bản có số bắt đầu là 1, và v.v.

- Nếu start_num văn bản lớn hơn độ dài của văn bản, thì kết quả trả về MID/MIDB là "" (văn bản trống).
                  
- Nếu start_num văn bản nhỏ hơn độ dài của văn bản nhưng start_num cộng num_chars vượt quá độ dài văn bản, thì giá trị trung bình của số MID/MIDB sẽ trả về các ký tự đến cuối văn bản.
                  
- Nếu start_num nhỏ hơn 1, thì giá trị trung bình của số MID/MIDB sẽ trả về #VALUE! .`,
                  detail_2: `num_chars (bắt buộc): đối với mid. Chỉ rõ số ký tự mà bạn muốn hàm MID trả về từ văn bản. Nếu số ký tự là số âm, thì hàm MID trả về giá trị lỗi #VALUE! .`,
                  detail_4: "",
                },
                example: {
                  detail_1: `=MID("Xin chào",2,5) Trả về 5 ký tự từ chuỗi. Kết quả: "in c"`,
                  detail_2: ``,
                },
                note: "",
                explanation: "Lưu ý: bắt đầu ở vị trí 5 với độ dài 5.",
              },
              {
                title: "LEN",
                description_vi: `Để lấy độ dài của một chuỗi, hãy sử dụng hàm LEN.`,
                syntax: {
                  syntax_fomular: `=LEN(text)`,
                  detail_1: `text (bắt buộc): Văn bản mà bạn muốn tìm độ dài của nó. Khoảng trống được đếm là ký tự.`,
                  detail_2: ``,
                  detail_3: ``,
                  detail_4: "",
                },
                example: {
                  detail_1: `=LEN("Xin chào") Trả về kết quả là 8`,
                  detail_2: ``,
                },
                note: "",
                explanation: "",
              },
              {
                title: "FIND",
                description_vi: `Để tìm vị trí của một chuỗi con trong một chuỗi, hãy sử dụng hàm FIND.`,
                syntax: {
                  syntax_fomular: `=FIND(find_text, within_text, [start_num])`,
                  detail_1: `find_text (bắt buộc): Văn bản mà bạn muốn tìm.`,
                  detail_2: `within_text (bắt buộc): Văn bản có chứa văn bản mà bạn muốn tìm.`,
                  detail_3: `start_num (tùy chọn): Chỉ rõ ký tự bắt đầu tìm tại đó. Ký tự thứ nhất của within_text là ký tự số 1. Nếu bạn bỏ qua start_num, thì nó được giả định là 1.`,
                  detail_4: "",
                },
                example: {
                  detail_1: `=FIND("c","Xin chào",1) Kết quả trả về là 5.`,
                  detail_2: ``,
                },
                note: "",
                explanation: `Lưu ý: chuỗi "ex" được tìm thấy ở vị trí 5.`,
              },
              {
                title: "SUBSTITUTE",
                description_vi: `Để thay thế văn bản hiện có bằng văn bản mới trong một chuỗi, hãy sử dụng hàm SUBSTITUTE.`,
                syntax: {
                  syntax_fomular: `=SUBSTITUTE(text, old_text, new_text, [instance_num])`,
                  detail_1: `text (bắt buộc): Văn bản hoặc tham chiếu đến ô chứa văn bản mà bạn muốn thay thế các ký tự trong đó.`,
                  detail_2: `old_text (bắt buộc): Văn bản mà bạn muốn được thay thế.`,
                  detail_3: `new_text (bắt buộc): Văn bản mà bạn muốn thay thế cho old_text.`,
                  detail_4: `instance_num (tùy chọn): Xác định số lần xuất hiện của old_text mà bạn muốn thay bằng new_text. Nếu bạn xác định instance_num, thì số lần xuất hiện đó của old_text được thay thế. Nếu không, mọi lần xuất hiện của old_text trong văn bản được đổi thành new_text.`,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "",
              },

            ]
          },
          {
            title: "Tìm kiếm và tham chiếu",
            icon: "table-search",
            description_en: "",
            description_vi: `Tìm hiểu tất cả về các hàm tra cứu & tham chiếu của Excel, chẳng hạn như hàm VLOOKUP, HLOOKUP, MATCH, INDEX và CHOOSE.`,
            data: [
              {
                title: "VLOOKUP",
                description_vi: `Hàm VLOOKUP (Tra cứu theo chiều dọc) tìm kiếm một giá trị trong cột ngoài cùng bên trái của bảng, sau đó trả về một giá trị trong cùng một hàng từ một cột khác mà bạn chỉ định.`,
                syntax: {
                  syntax_fomular: `=VLOOKUP(lookup_value, table_array, col_index_ num, [range_lookup])`,
                  detail_1: `lookup_value (bắt buộc): Giá trị cần dò tìm. Bạn có thể điền giá trị trực tiếp vào công thức hoặc tham chiếu tới một ô trên bảng tính Excel.`,
                  detail_2: `table_array (bắt buộc): Bảng giới hạn để dò tìm, bạn cần F4 để Fix cố định giá trị cho mục đích copy công thức tự động, nếu bạn sử dụng laptop, có thể bạn sẽ cần bấm phím FN+F4 để cố định tham chiếu cho vùng bảng tính này.`,
                  detail_3: `col_index_num (bắt buộc): Số thứ tự của cột lấy dữ liệu trong bảng cần dò tìm, tính từ trái qua phải.`,
                  detail_4: `Range_lookup (tùy chọn): Là giá trị Logic (TRUE=1, FALSE=0) quyết định so sánh, tìm kiếm chính xác hay so sánh, tìm kiếm tương đối với bảng giới hạn.

- Nếu Range_lookup = 1 (TRUE): So sánh tương đối.

- Nếu Range_lookup = 0 (FALSE): So sánh chính xác.

- Nếu bỏ qua đối này thì Excel hiểu là Range_lookup = 1 một cách mặc định.`,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "Giải thích: hàm VLOOKUP tìm trái cây (Cam) ở cột ngoài cùng bên trái của phạm vi $B$2:$D$7 và trả về giá trị trong cùng một hàng từ cột thứ 3 (cột D). Đối số thứ tư được đặt thành FALSE để trả về kết quả khớp chính xác hoặc lỗi #N/A nếu không tìm thấy.",
              },
              {
                title: "HLOOKUP",
                description_vi: `Theo cách tương tự, bạn có thể sử dụng hàm HLOOKUP (Tra cứu theo chiều ngang).`,
                syntax: {
                  syntax_fomular: `=HLOOKUP(lookup_value, table_array, row_index_num, [range_lookup])`,
                  detail_1: `lookup_value (bắt buộc): Giá trị cần dò tìm. Bạn có thể điền giá trị trực tiếp vào công thức hoặc tham chiếu tới một ô trên bảng tính Excel.`,
                  detail_2: `table_array (bắt buộc): Bảng giới hạn để dò tìm, bạn cần F4 để Fix cố định giá trị cho mục đích copy công thức tự động, nếu bạn sử dụng laptop, có thể bạn sẽ cần bấm phím FN+F4 để cố định tham chiếu cho vùng bảng tính này.`,
                  detail_3: `col_index_num (bắt buộc): Số thứ tự của hàng lấy dữ liệu trong bảng cần dò tìm, tính từ trên xuống dưới.`,
                  detail_4: `Range_lookup (tùy chọn): Là giá trị Logic (TRUE=1, FALSE=0) quyết định so sánh, tìm kiếm chính xác hay so sánh, tìm kiếm tương đối với bảng giới hạn.

- Nếu Range_lookup = 1 (TRUE): So sánh tương đối.

- Nếu Range_lookup = 0 (FALSE): So sánh chính xác.

- Nếu bỏ qua đối này thì Excel hiểu là Range_lookup = 1 một cách mặc định.`,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "",
              },
              {
                title: "MATCH",
                description_vi: `Hàm MATCH trả về vị trí của một giá trị trong một phạm vi nhất định.`,
                syntax: {
                  syntax_fomular: `=MATCH(<giá trị cần tìm vị trí>, <vùng chứa giá trị này>, [ 1 trong 3 số : 1 hoặc 0 hoặc -1])`,
                  detail_1: `<giá trị cần tìm vị trí> (tham số bắt buộc): là giá trị bạn muốn tìm vị trí tương đối trong mảng, có thể thuộc loại dữ liệu số, text, logic hoặc là 1 tham chiếu đến 1 địa chỉ ô`,
                  detail_2: `<vùng chứa giá trị này> (tham số bắt buộc): vùng muốn tìm giá trị`,
                  detail_3: ` [ 1 trong 3 số : 1 hoặc 0 hoặc -1] (Tham số không bắt buộc): định nghĩa cách tìm kiếm

- Nếu bạn điền số 1 hoặc bỏ trống: hàm Match sẽ tìm giá trị lớn nhất trong vùng tìm kiếm nhưng nhỏ hơn hoặc bằng giá trị đang được tìm kiếm. Chú ý: vùng tìm kiếm cần được sắp xếp theo chiều tăng dần, nghĩa là, từ giá trị nhỏ nhất đến giá trị lớn nhất hoặc từ A tới Z.

- Nếu bạn điền số 0: hàm Match sẽ tìm chính xác giá trị cần tìm trong vùng và trả lại vị trí đầu tiên mà nó tìm thấy.

- Nếu bạn điền số -1: hàm Match sẽ tìm giá trị nhỏ nhất trong vùng tìm kiếm nhưng lơn hơn hoặc bằng giá trị đang được tìm kiếm. Chú ý: vùng tìm kiếm cần được sắp xếp theo thứ tự giảm dần, nghĩa là, từ giá trị lớn nhất đến giá trị nhỏ nhất hoặc từ Z tới A.`,
                  detail_4: ``,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: `Giải thích: "Xoài" được tìm thấy ở vị trí 3 trong dãy B24:B11. Đối số thứ ba là tùy chọn. Đặt đối số này thành 0 để trả về vị trí của giá trị chính xác hoặc trả về #N/A nếu không tìm thấy. Sử dụng INDEX và MATCH trong Excel và gây ấn tượng với sếp của bạn.`,
              },
              {
                title: "INDEX",
                description_vi: `Hàm INDEX bên dưới trả về một giá trị cụ thể trong phạm vi hai chiều.`,
                syntax: {
                  syntax_fomular: `=INDEX(array,row_num,[column_num])`,
                  detail_1: `array: vùng ô hoặc một hàng số mảng nào đó bắt buộc.`,
                  detail_2: `row_num: chọn hàng trong mảng từ đó trả về một giá trị.`,
                  detail_3: `column_num: chọn cột trong mảng từ đó trả về một giá trị.`,
                  detail_4: `Lưu ý bắt buộc phải có ít nhất một trong hai đối số Row_num và Column_num.`,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "Hàm INDEX cũng có thể trả về một giá trị cụ thể trong phạm vi một chiều. Hãy thứ thay công thức bằng =INDEX(B2:B7,E3) để xem kết quả.",
                explanation: `"Xoài" được tìm thấy ở giao điểm của hàng 3 và cột 2 trong phạm vi A2:B7.`,
              },
              {
                title: "CHOOSE",
                description_vi: `Hàm CHOOSE trả về một giá trị từ danh sách các giá trị, dựa trên số vị trí.`,
                syntax: {
                  syntax_fomular: `Cú pháp: =CHOOSE(index_num, value1, [value2]…)`,
                  detail_1: `index_num: Vị trí của dữ liệu trả về. Giá trị index_num phải là số nguyên hoặc là kết quả của 1 công thức nhưng phải là giá trị nguyên. Giới hạn index_num trong khoảng từ 1 đến 29.  Nếu index_num =1 => Giá trị trả về là value 1, index_num =2 => giá trị trả về là value2…`,
                  detail_2: `value1: Giá trị trả về thứ 1.`,
                  detail_3: `value2: Giá trị trả về thứ 2.`,
                  detail_4: `Các giá trị value nằm trong khoảng từ 1 đến 29.`,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "Nếu giá trị index_num không phải là số nguyên hàm trả về giá trị lỗi #Value!",
                explanation: `Giải thích: "Cam" được tìm thấy ở vị trí 2.`,
              },
            ]
          },
          {
            title: "Làm tròn số",
            icon: "surround-sound-2-0",
            description_en: "",
            description_vi: `Tìm hiểu tất cả về ba hàm làm tròn số trong Excel: ROUND, ROUNDUP và ROUNDDOWN.`,
            data: [
              {
                title: "ROUND",
                description_vi: `Hàm ROUND trong Excel làm tròn một số thành một số chữ số được chỉ định. Hàm ROUND làm tròn lên hoặc xuống. 1, 2, 3 và 4 được làm tròn xuống. 5, 6, 7, 8 và 9 được làm tròn.`,
                syntax: {
                  syntax_fomular: `=ROUND(Number,N)`,
                  detail_1: `Number là số cần làm tròn.`,
                  detail_2: `N là đối số, là giá trị thực tế truyền vào cho tham số khi gọi hàm, có thể âm hoặc dương.`,
                  detail_3: `- N = 0  Làm tròn tới số nguyên gần nhất.
                  
- N < 0	Làm tròn tới vị trí thập phân chỉ định.
                  
- N > 0 Làm tròn sang bên trái dấu thập phân.`,
                  detail_4: ``,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "Giải thích: Đối số thứ 2 của hàm là bao nhiêu số thập phân được làm tròn, trên ví dụ trên là làm tròn một số đến 1 chữ số thập phân.",
              },
              {
                title: "ROUNDUP",
                description_vi: `Hàm ROUNDUP trong Excel luôn làm tròn một số lên (đi từ số 0). 1, 2, 3, 4, 5, 6, 7, 8 và 9 được làm tròn.`,
                syntax: {
                  syntax_fomular: `=ROUNDUP(number, num_digits).`,
                  detail_1: `number: Giá trị muốn làm tròn.`,
                  detail_2: `num_digits: Số chữ số muốn làm tròn.`,
                  detail_3: ``,
                  detail_4: ``,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "",
              },
              {
                title: "ROUNDDOWN",
                description_vi: `Hàm ROUNDDOWN trong Excel luôn làm tròn một số xuống (về 0). 1, 2, 3, 4, 5, 6, 7, 8 và 9 được làm tròn xuống.`,
                syntax: {
                  syntax_fomular: `=ROUNDDOWN(number, num_digits).`,
                  detail_1: `number: Giá trị muốn làm tròn`,
                  detail_2: `num_digits: Số chữ số muốn làm tròn.`,
                  detail_3: ``,
                  detail_4: ``,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "Ngoài những hàm này ra, excel còn cung cấp cho bạn những hàm làm tròn khác như INT, TRUNC, MROUND, CEILING, FLOOR, EVEN,ODD, ISEVEN, ISODD, MOD",
                explanation: ``,
              },
            ]
          },
          {
            title: "Các hàm excel Khác",
            icon: "more",
            description_en: "",
            description_vi: `Hướng dẫn các hàm trung bình và xử lí lỗi AVERAGE, AVERAGEA, IFERROR, ISERROR`,
            data: [
              {
                title: "AVERAGE",
                description_vi: `Hàm AVERAGE trong Excel tính giá trị trung bình (trung bình cộng) của một nhóm số. Hàm AVERAGE bỏ qua các giá trị logic, ô trống và ô chứa văn bản.`,
                syntax: {
                  syntax_fomular: `=AVERAGE(number1,[number2],…).`,
                  detail_1: `number1: Đối số thứ nhất có thể là số, tham chiếu ô hoặc phạm vi chứa số mà các bạn muốn tính trung bình, bắt buộc.`,
                  detail_2: `number2: Là các số, tham chiếu ô hoặc phạm vi chứa số bổ sung mà các bạn muốn tính trung bình tối đa 255 số, tùy chọn.`,
                  detail_3: ``,
                  detail_4: ``,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "Hàm AVERAGE trên đây tính giá trị trung bình của các số trong các ô từ A1 đến A3.",
              },
              {
                title: "AVERAGEA",
                description_vi: `Hàm AVERAGEA cũng trả về giá trị trung bình (trung bình cộng) của một nhóm số. Tuy nhiên, giá trị logic FALSE và các ô chứa văn bản được đánh giá là 0 và giá trị TRUE là 1. Hàm AVERAGEA cũng bỏ qua các ô trống.`,
                syntax: {
                  syntax_fomular: `=AVERAGEA(value1, [value2], ...)`,
                  detail_1: `Value1, value2, ...    Value1 là bắt buộc, giá trị tiếp theo là tùy chọn. 1 tới 255 ô, phạm vi ô hoặc giá trị mà bạn muốn tính trung bình của chúng.`,
                  detail_2: ``,
                  detail_3: ``,
                  detail_4: ``,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "Ta được phép tính như sau: (1 + 2 + FALSE + 4)/4, mà khi gặp FALSE hàm AVERAGEA trả về FALSE=0. Vậy ta có kết quả là 7/4 = 1.75",
              },
              {
                title: "AVERAGEIF",
                description_vi: `Hàm AVERAGEIF cũng trả về giá trị trung bình (trung bình cộng) của một nhóm số theo điều kiện`,
                syntax: {
                  syntax_fomular: `=AVERAGEIF(range, criteria, [average_range]).`,
                  detail_1: `range: là phạm vi cần tính giá trị trung bình có thể là số, tên, các tham chiếu, các mảng.`,
                  detail_2: `criteria là điều kiện dưới dạng số, biểu thức, tham chiếu ô hoặc văn bản để xác định tính giá trị trung bình. Điều kiện nằm trong dấu " ".`,
                  detail_3: `average_range bao gồm các ô cần tính giá trị trung bình. Nếu Average_range bỏ trống thì sẽ thay thế bằng Range để tiến hành tính giá trị trung bình.`,
                  detail_4: `Những ô trống trong Average_range, báo TRUE, FALS hàm AVERAGEIF sẽ bỏ qua.

- Nếu Range không chứa giá trị hoặc chứa hàm chuỗi thì kết quả sẽ báo lỗi.

- Nếu Criteria trống thì hàm bằng 0.

- Nếu xác định không có giá trị nào phù hợp với điều kiện Criteria chúng ta cũng sẽ nhận được báo lỗi.

- Average_range không cần bắt buộc có kích thước như vùng phạm vi Range. Nếu không có, hàm AVERAGEIF sẽ xác định từ ô bên trái trên cùng làm ô đầu tiên rồi tương ứng khớp với phạm vi.`,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "Hàm AVERAGEIF có 3 đối số như sau (vùng tham chiếu, điều kiện, vùng tính trung bình nếu thỏa điều kiện). Trong ví dụ trên có A1 và A3 là Cam nên giá trị trung bình sẽ là (10 +30)/2=20",
              },
              {
                title: "AVERAGEIFS",
                description_vi: `Hàm AVERAGEIFS cũng trả về giá trị trung bình (trung bình cộng) của một nhóm số theo nhiều điều kiện`,
                syntax: {
                  syntax_fomular: `=AVERAGEIFS(average_range, criteria_range1, criteria1, [criteria_range2, criteria2], ...).`,
                  detail_1: `average_range: Vùng dữ liệu cần tính giá trị trung bình cộng bao gồm số hoặc tên hoặc mảng tham chiếu có chứa số, là tham số bắt buộc.`,
                  detail_2: `criteria_range1, criteria_range2: Phạm vi chứa điều kiện cần tính tổng, criteria_range1 là tham số bắt buộc, các criteria_range còn lại tùy chọn tối đa 127 đối số, là tham số bắt buộc.`,
                  detail_3: `criteria1, criteria2, ...: Là điều kiện cần tính trung bình cộng, riteria1 là tham số bắt buộc, các criteria khác tùy chọn chứa tối đa 127 điều kiện.`,
                  detail_4: `Lưu ý khi dùng hàm:
- Nếu giá trị các đối số có chứa giá trị logic hoặc ô trống thì giá trị đó sẽ bỏ qua.

- Nếu phạm vi là ô trống hoặc dạng văn bản thì hàm trả về giá trị lỗi #DIV/0.

- Nếu các ô trong Criteria_range là ô trống, hàm mặc định bằng 0.

- Nếu giá trị trong ô dữ liệu là giá trị logic = True thì được coi là 1, nếu giá trị False được coi là 0.

- Nếu các giá trị trong average_range không thể chuyển thành số thì báo lỗi #DIV/0.

- Nếu không có giá trị nào đáp ứng tất cả các điều kiện thì hàm báo lỗi #DIV/0!.

- Có thể sử dụng các ký tự thay thế như *.?. trong điều kiện tính trung bình cộng.`,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: "Hàm AVERAGEIFS có các đối số như sau (vùng tính trung bình cộng, vùng chứa điều kiện 1, điều kiện 1, vùng chứa điều kiện 2, điều kiện 2,...",
              },
              {
                title: "IFERROR",
                description_vi: `Sử dụng hàm IFERROR trong Excel để trả về kết quả thay thế, chẳng hạn như văn bản, khi công thức đánh giá lỗi.`,
                syntax: {
                  syntax_fomular: `=IFERROR(value, value_if_error)`,
                  detail_1: `value: Đây là đối số cần kiểm tra. Có thể là phép tính, công thức, hàm Excel, là giá trị bắt buộc.`,
                  detail_2: `value_if_error: Đây là giá trị trả về mà chỉ định nếu công thức bị lỗi.`,
                  detail_3: `Giá trị Value_if_error được trả về khi công thức trả về giá trị với các kiểu lỗi như: #N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME? hoặc #NULL!.`,
                  detail_4: ``,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: `Giá trị ô C3 = A3/B3 tức là 20/0 sẽ bị lỗi #DIV/0!. Hàm IFERROR thay thế lỗi này bằng cụm từ do ta quy định "B không được bằng 0"`,
              },
              {
                title: "ISERROR",
                description_vi: `Hàm ISERROR trong Excel kiểm tra xem một giá trị có phải là lỗi hay không và trả về TRUE hoặc FALSE.`,
                syntax: {
                  syntax_fomular: `=ISERROR( value )`,
                  detail_1: `value: là biểu thức hoặc giá trị cần kiểm tra.`,
                  detail_2: ``,
                  detail_3: ``,
                  detail_4: ``,
                },
                example: {
                  detail_1: ``,
                  detail_2: ``,
                },
                note: "",
                explanation: ``,
              },
            ]
          },
        ]
      },
      {
        title: 'Formating',
        vi: "Định dạng dữ liệu",
        icon: "format-color-fill",
        data: [
          {
            title: "Định dạng dữ liệu, văn bản",
            icon: "format-letter-case-lower",
            description_en: "",
            description_vi: "Định dạng kiểu số, chữ, phần trăm, thập phân, ngày tháng...",
            data: [
              {
                title: "Bắt Đầu",
                description_vi: "Chọn vùng dữ liệu cần định dạng rồi mở của sổ Format cell bằng cách click chuột phải trên vùng đã chọn",
                note: "Bạn cũng có thể mở Format cell nhanh bằng phím tắt CTR + 1",
                explanation: "",
              },
              {
                title: "1. Định dạng số – Number",
                description_vi: "Trong định dạng Number, có các thông số sau: Sample: là mẫu xem trước khi có các thay đổi. Decimal places: số chữ số sau dấu thập phân.Use 1000 Separator (,): ẩn/ hoặc hiện dấu phân cách hàng nghìn. Negative numbers: cách hiện thị số âm.",
                note: "",
                explanation: "",
              },
              {
                title: "2. Định dạng tiền tệ – Currency",
                description_vi: "Trong định dạng tiền tệ, bạn có thể thay đổi ký hiệu (Symbol) cho phù hợp với từng loại tiền của mỗi nước.",
                note: "",
                explanation: "",
              },
              {
                title: "3. Định dạng kế toán – Accounting",
                description_vi: "Kiểu định dạng kế toán khác với định dạng tiền tệ ở chỗ, ký hiệu tiền tệ sẽ được căn lề sang bên trái.",
                note: "",
                explanation: "",
              },
              {
                title: "4. Định dạng ngày/thời gian - Date/time ",
                description_vi: "Ở mỗi khu vực, nước sẽ có kiểu định dạng ngày – thời gian khác nhau, chọn Locale và Type để chọn định ngày – thời gian phù hợp.",
                note: "",
                explanation: "",
              },
              {
                title: "5. Định dạng phần trăm – Percentage",
                description_vi: "Là hiển thị theo phần của 100. Ví dụ: 0.4% sẽ hiển thị thành 40% khi sử dụng định dạng.",
                note: "",
                explanation: "",
              },
              {
                title: "6. Định dạng phân số – Fraction",
                description_vi: "Kiểu định dạng này cho phép hiển thị theo dạng phân số tối giản hoặc không tối giản. Lưu ý khi nhập là nhập số chứ không nhập phân số. Ví dụ: để hiện phân số 1/2 thì bạn nhập là 0.5 rồi định dạng.",
                note: "",
                explanation: "",
              },
              {
                title: "7. Định dạng văn bản – Text",
                description_vi: "Kiểu định dạng văn bản sẽ chuyển tất cả nội dung về văn dạng văn bản và căn lề trái thay vì văn lền phải như kiểu mặc định General.",
                note: "",
                explanation: "",
              },
              {
                title: "8. Định dạng Custom",
                description_vi: "Đây là kiểu định dạng theo kiểu người dùng, người dùng có thể định dạng tùy theo từng khu vực. Ví dụ ở Việt Nam kiểu định dạng phổ biến là dd/mm/yyyy, trong khi theo kiểu Anh Mỹ thì là YYYY-MMM-DD,...",
                note: "",
                explanation: " d:ngày (day), m: tháng (month), y: năm (year), h: giờ (hour), m: phút (min), s: giây (second)",
              },
            ]
          },
          {
            title: "Định dạng theo điều kiện",
            icon: "checkbox-blank-circle",
            description_en: "",
            description_vi: "Bạn có thể tự thiết lập các rule để định dạng excel theo ý riêng của mình, đây là công cụ mạnh mẽ và hiệu quả trong công việc",
            data: [
              {
                title: "Bắt đầu",
                description_vi: "Để tạo một rule mới hãy chọn vùng bạn muốn định dạng, click chuột tab Home > Conditional formatting > New rules",
                note: "",
                explanation: "Tương tự để xóa rule: Home > Conditional formatting > Clear rules, hoặc sửa đổi rule: Home > Conditional formatting > Manage rule",
              },
              {
                title: "1. Format cells based on their values",
                description_vi: "Định dạng dựa trên giá trị của các ô. Chọn màu thể hiện cho giá trị thấp nhất bên cột Minimum, và giá trị cao nhất bên cột Minimum. Lúc này các ô sẽ được tô màu từ thấp đến cao.",
                note: "",
                explanation: "Bạn cũng có thể chọn 3 loại màu với 3-color scale, hay thể hiện theo Data Bar, Icon sets",
              },
              {
                title: "2. Format only cells that contain",
                description_vi: `"Format only cells that contain" bao gồm các phép toán between: trong khoảng giữa, not between: không nằm trong khoảng, equal to:bằng, not equal to: không bằng, grater than: lớn hơn, les than: nhở hơn, grater than or equal to: lớn hơn hoặc bằng và less than or equal to: nhở hơn hoặc bằng`,
                note: "",
                explanation: "",
              },
              {
                title: "3. Format only top or bottom ranked values",
                description_vi: "Định dạng dữ liệu thuộc cao nhất hoặc thấp nhất",
                note: "",
                explanation: "",
              },
              {
                title: "4. Format only values that are above or below average",
                description_vi: "Định dạng dữ liệu trên hoặc dưới ngưỡng trung bình",
                note: "",
                explanation: "",
              },
              {
                title: "5. Format only unique or duplicate values",
                description_vi: "Định dạng theo giá trị trùng hoặc không trùng",
                note: "",
                explanation: "",
              },
              {
                title: "6. Use a formular to determine which cells to format",
                description_vi: `Định dạng dữ liệu theo điều kiện từ người dùng thiết lập. Đây là kiểu rule linh hoạt nhất tùy theo khả năng vận dùng của người dùng.`,
                note: "",
                explanation: `Hàm if trả về TRUE nếu giá trị ô F6="Cam" và áp dụng định dạng màu nếu TRUE. Lưu ý bạn chỉ nên cố định cột $F6 (thay vì $F$6) để Excel tự kiểm tra ở những dòng kế F7,F8...`,
              },
            ]
          },
          {
            title: "Làm việc với Shape",
            icon: "shape",
            description_en: "",
            description_vi: "Hướng dẫn cách vẻ, định dạng chữ, màu sắc, và chèn hình ảnh vào shape bất kỳ.",
            data: [
              {
                title: "Bắt đầu",
                description_vi: "Để chèn một hình khối bất kỳ ta mở tab Insert > Shape",
                note: "",
                explanation: "",
              },
              {
                title: "1. Thêm ký tự vào shape",
                description_vi: "Nhấp chuột phải lên shape đó và chọn Edit Text, rồi nhập vào ký tự bạn mong muốn",
                note: "",
                explanation: "",
              },
              {
                title: "Kết quả",
                description_vi: ``,
                note: "",
                explanation: "",
              },
              {
                title: "2. Định dạng ký tự",
                description_vi: "Chọn biểu tượng canh giữa trên thanh công cụ Home > Alignment",
                note: "",
                explanation: "",
              },
              {
                title: "Thay đổi kích thước Font chữ và áp dụng kiểu in đậm",
                description_vi: "Chọn biểu tượng chữ B để áp dụng in đậm, và gõ kích thước font trên cụ Home > Font",
                note: "",
                explanation: "",
              },
              {
                title: "3. Thay màu nền, viền",
                description_vi: "Chọn shape và click chuột phải > Format shapes. Để thay đổi màu nền chọn Shapes Fill, để thay đổi viền chọn Shapes Outline",
                note: "",
                explanation: "",
              },
              {
                title: "Tạo màu nền gradient",
                description_vi: "Chọn shape > Click chuột phải > Format shapes để mở tab Format Shapes",
                note: "",
                explanation: "",
              },
              {
                title: "Tùy chỉnh gradient",
                description_vi: "Đánh dấu tick vào Gradient fill > Tạo 2 điểm màu trong Gradient stops theo thứ tự đậm tới nhạt dần,",
                note: "",
                explanation: "Bạn có thể chọn nhiều điểm Gradient stop tùy theo nhu cầu",
              },
              {
                title: "4. Chèn ảnh vào shape",
                description_vi: "Chọn shape bất kỳ > Format shapes > đánh dấu tick vào Picture or texture fill, nhấn vào Flle",
                note: "",
                explanation: "",
              },
              {
                title: "Lựa chọn ảnh để chèn vào shape và chọn Import",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "Kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },
            ]
          },
        ]
      },
      {
        title: 'Chart',
        vi: "Biểu đồ & trang trí",
        icon: "pie-chart",
        data: [
          {
            title: "Vẽ biểu đồ",
            icon: "chart-bar",
            description_en: "",
            description_vi: "Cách vẻ biều đồ, thay đổi vùng dữ liệu đơn giản, nhanh chóng",
            data: [
              {
                title: "Bắt Đầu",
                description_vi: "Chọn vùng dữ liệu cần định dạng, chọn tab Insert >Recommended Chart",
                note: "Chú ý: Để vẻ một biểu đồ thì dữ liệu phải bao gồm ít nhất 2 trường, 1 trường để excel vẽ nhãn (label) và một trường để vẽ giá trị (value). Đối với các dạng biểu đồ khác như cột đôi,cột chồng... bạn sẽ cần có thêm nhiều trường giá trị (value) khác. Tùy theo mục đích của báo cáo mà bạn chọn loại dữ liệu và biểu đồ cho phù hợp",
                explanation: "",
              },
              {
                title: "Chọn loại biểu đồ",
                description_vi: "Sau khi bạn nhấn vào Recommended Chart excel sẽ tự đựa ra những loại biểu đồ nào phù hợp với dữ liệu của bạn, hãy lựa chọn 1 loại biểu đồ và Click OK",
                note: "",
                explanation: "",
              },
              {
                title: "Xem kết quả",
                description_vi: "Excel tự động tạo ra biểu đồ dựa theo dữ liệu mà bạn cung cấp",
                note: "Với cách làm tương tự, bạn có thể vẽ cho biều đồ tròn (Pie Chart), cột ngang (Bar Chart), miền (Area)...",
                explanation: "",
              },
              {
                title: "Thay đổi dữ liệu bằng kéo thả chuột",
                description_vi: "Click chuột trái lên biểu đồ để xuất hiện các highlight vùng dữ liệu sau đó kéo và thả đến phạm vi mong muốn",
                note: "",
                explanation: "",
              },
              {
                title: "Thay đổi dữ liệu thông qua hộp thoại",
                description_vi: "Click chuột phải để mở hộp thoại > Select Data",
                note: "",
                explanation: "",
              },
              {
                title: "Click và mục Edit bên dưới Legends Entry (Series) để thay đổi phạm vi trục giá trị",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "Thay đổi giá trị cột để nới rộng phạm vi và Click Ok xác nhận",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "Tiếp tục Click vào Edit bên dưới Horizontal (Category) Axis labels để thay đổi phạm vi cho nhãn",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "Thay đổi phạm vi label như hình sau, Click OK xác nhận.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "Kết quả sau khi thay đổi phạm vi vùng dữ liệu",
                description_vi: "",
                note: "Bạn cũng có thể áp dụng cách này để vẻ một biểu đồ",
                explanation: "",
              },
            ]
          },
          {
            title: "Định dạng biểu đồ",
            icon: "format-color-highlight",
            description_en: "",
            description_vi: "Cách định dạng màu sắc, kiểu chữ, kiểu biều,... đồ để thu hút người xem",
            data: [
              {
                title: "1. Thêm label",
                description_vi: "Click chuột vào các cột và thực hiện các bước theo hình minh họa sau đây để thêm label",
                note: "",
                explanation: "Tùy theo biểu đồ bạn có thể chọn Add Data Labels hoặc Add Data Callouts cho phù hợp",
              },
              {
                title: "Kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "2. Thay đổi màu sắc cột",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "3. Thay đổi màu nền, viền",
                description_vi: "Mở tab Format PLot Area như hình sau",
                note: "",
                explanation: "",
              },
              {
                title: "Đánh dấu tick và thay đổi màu theo ý muốn vào các ô đỏ bên dưới theo ảnh",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "Kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "4. Tùy chỉnh giá trị các trục",
                description_vi: "Click vào trục thể hiện số lượng > Chuột phải để mở tab Format Axis",
                note: "",
                explanation: "",
              },
              {
                title: "Thay đổi giá trị cao nhất vào ô maximum, và khoảng cách hiển thị giữa các nấc vào ô Unit Major và Unit Minor",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "5. Thay đổi tiêu đề biểu đồ",
                description_vi: "Click chuột vào tiêu đề và nhập tên bạn muốn",
                note: "",
                explanation: "",
              },
              {
                title: "Click chuột ra bên ngoài để thoát khỏi chế độ nhập và để xem kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },
            ]
          },
          {
            title: "Chuyển đổi biểu đồ",
            icon: "dip-switch",
            description_en: "",
            description_vi: "Chuyển đổi sang nhiều dạng biểu đồ như biểu đồ Pie, Line, Bar, Area... và ngược lại từ một mô hình dữ liệu.",
            data: [
              {
                title: "Bắt Đầu",
                description_vi: "Từ một mô hình dữ liệu ban đầu bạn có thể chuyển đổi sang nhiều loại biểu đồ khác nhau để phù hợp với từng mục đích sử dụng. Để bắt đầu hãy Click chuột trái chọn biểu đồ > Chuột phải chọn Change Chart type để mở tab Change Chart type",
                note: "",
                explanation: "",
              },
              {
                title: "1. Chuyển sang biểu đồ tròn (Pie chart)",
                description_vi: "Trên tab Change Chart type > All Charts hãy chọn Pie để vẽ biều đồ Pie, Click OK để áp dụng và xem kết quả",
                note: "",
                explanation: "",
              },
              {
                title: "Biều đồ tròn được áp dụng",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "2. Chuyển sang biểu đồ cột ngang (Bar chart)",
                description_vi: "Trên tab Change Chart type > All Charts hãy chọn Pie để vẽ biều đồ cột ngang, Click OK để áp dụng và xem kết quả",
                note: "",
                explanation: "",
              },
              {
                title: "Biều đồ cột ngang được áp dụng",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "3. Chuyển sang biểu đồ Miền (Area chart)",
                description_vi: "Trên tab Change Chart type > All Charts hãy chọn Area để vẽ biều đồ miền, Click OK để áp dụng và xem kết quả",
                note: "",
                explanation: "",
              },
              {
                title: "Biều đồ Miền được áp dụng",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "Với cách tương tự. Bạn cũng có thể áp dụng cho những loại biểu đồ khác nếu dữ liệu của bạn phù hợp để vẻ loại biều đồ đó như: X,Y (Scater), Stock, Surface, Rada, Combo",
                description_vi: "",
                note: "",
                explanation: "",
              },


            ]
          },
        ]
      },
      {
        title: 'Import/Export',
        vi: "Nhập/Xuất dữ liệu",
        icon: "import-export",
        data: [
          {
            title: "Xuất dữ liệu cơ bản (Basic Export)",
            icon: "file-download",
            description_en: "When you have data that needs to be transferred to another system, export it from Excel in a format that can be interpreted by other programs, such as a text or CSV file.",
            description_vi: "Khi bạn có dữ liệu cần được chuyển sang một hệ thống khác, hãy xuất dữ liệu đó từ Excel ở định dạng mà các chương trình khác có thể hiểu được, chẳng hạn như văn bản hoặc tệp CSV.",
            data: [

              {
                title: "1. Mở của sổ export",
                description_vi: " Nhấp vào File tab > Chọn Export > Click chọn Change File Type",
                note: "",
                explanation: "",
              },
              {
                title: "",
                description_vi: "Chọn loại file bạn muốn xuất ra (4) và click Save (5)",
                note: "",
                explanation: "Loại tệp bạn chọn sẽ phụ thuộc vào loại tệp được yêu cầu bởi chương trình sẽ sử dụng dữ liệu được xuất.",
              },
              {
                title: "2 Chọn thư mục bạn muốn xuất ra vào Click Save",
                description_vi: "",
                note: "",
                explanation: "",
              },
            ]
          },
          {
            title: "Thêm dữ liệu cơ bản (Basic Import)",
            icon: "file-upload",
            description_en: "Excel can import data from external data sources including other files, databases, or web pages",
            description_vi: "Excel có thể nhập dữ liệu từ các nguồn dữ liệu bên ngoài bao gồm các tệp, cơ sở dữ liệu hoặc trang web khác",
            data: [
              {
                title: "1. Mở cửa sổ Import.",
                description_vi: "Click chọn Data tab trên thanh Ribbon > Get Data > From Text/CSV",
                note: "Nếu bạn có dữ liệu để nhập từ Access, web hoặc một nguồn khác, hãy chọn một trong các tùy chọn đó trong nhóm Lấy Dữ liệu Bên ngoài.",
                explanation: "",
              },
              {
                title: "2.Click chọn file bạn muốn import",
                description_vi: "Nếu trong khi nhập dữ liệu bên ngoài, một thông báo bảo mật xuất hiện cho biết rằng nó đang kết nối với một nguồn bên ngoài có thể không an toàn, hãy bấm OK.",
                note: "",
                explanation: "",
              },
              {
                title: "3.Xác minh xem bản xem trước có đúng không",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "4.Đánh dấu check vào ô Comma để ngăn cách cột",
                description_vi: "",
                note: "Vì dữ liệu được phân tách bằng dấu phẩy. Nếu bạn cần thay đổi nó, nó có thể được thực hiện từ menu này.",
                explanation: "",
              },
              {
                title: "5. Click Finish",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "6. Chọn khu vực ghi dữ liệu",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "7. Kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },
            ]
          },
          {
            title: "Thêm dữ liệu từ web (Web data import)",
            icon: "web",
            description_en: "",
            description_vi: "Import dữ liệu trực tiếp từ các trang web vào excel một cách nhanh chóng.",
            data: [
              {
                title: "1. Mở của sổ import",
                description_vi: "Nhấp vào Data tab > From Web",
                note: "",
                explanation: "",
              },
              {
                title: "2. Nhập địa chỉ URL trang web chứa data bạn muốn lấy dữ liệu",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "3. Click nút Go",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "4. Chọn Yes để bỏ qua các cửa sổ thông báo",
                description_vi: "",
                note: "Lúc này có thể một số hộp thoại thông báo xuất hiện, nhưng bạn đừng quan tâm hãy chọn yes đến khi không còn xuất hiện thông báo đó nữa",
                explanation: "",
              },
              {
                title: "5. Sau khi trang web đã được tải, click Import",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "6. Chọn vị trí ghi dữ liệu",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "7. Kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },
            ]
          },
          {
            title: "Đồng bộ dữ liệu từ Google sheet xuống Excel",
            icon: "transit-connection-variant",
            description_en: "",
            description_vi: "Liên kết và đồng bộ giữa file Google sheet và file excel, tự động cập nhật khi có thay đổi từ google sheet.",
            data: [
              {
                title: "1. Bắt đầu",
                description_vi: `Trên file Google sheet của bạn hãy Click vào Chia sẽ để mở cài đặt`,
                note: ``,
                explanation: ``,
              },
              {
                title: `2. Thay đổi thiết lập `,
                description_vi: `Chuyển sang trạng thái chia sẽ, hãy để chế độ bất kỳ ai có đường liên kết, Click sao chép liên kế và cuối cùng click OK xác nhận.`,
                explanation: ``,
                note: ``,
              },
              {
                title: `3. Mở cửa sổ import`,
                description_vi: `Trong trang excel của bạn, đi đến tab DATA > New Query > Other Source > From Web.`,
                explanation: ``,
                note: ``,
              },
              {
                title: `4. Dán địa chỉ liên kế google sheet`,
                description_vi: `Sau khi dán địa chỉ vào Ô URL click Ok xác nhận`,
                explanation: ``,
                note: ``,
              },
              {
                title: `5. Thay đổi `,
                description_vi: `Đổi phần đuôi của địa chỉ thành export?format=xlsx. Sau khi hoàn tất click Ok xác nhận`,
                explanation: ``,
                note: ``,
              },
              {
                title: `6. Kết nối`,
                description_vi: `Bỏ qua của sổ thông báo, nhấn Connect`,
                explanation: ``,
                note: ``,
              },
              {
                title: `7. Load dữ liệu`,
                description_vi: `Chọn Sheet có dữ liệu bạn cần lưu vào excel và click Load`,
                explanation: `Nếu bạn chọn Load, excel sẽ tự load vào trang excel khác. Bạn có thể chọn Load To để ấn định chỗ lưu theo ý muốn.`,
              },
              {
                title: `8. Kết quả`,
                description_vi: ``,
                explanation: ``,
                note: ``,
              },
              {
                title: `9. Thay đổi dữ liệu`,
                description_vi: `Thay đổi dữ liệu trên file google sheet`,
                explanation: ``,
                note: ``,
              },
              {
                title: `10. Refresh`,
                description_vi: `Bên trang excel hãy nhấn nút Refresh để kiểm tra.`,
                explanation: ``,
                note: ``,
              },
              {
                title: `11. Kết quả sau khi Refresh.`,
                description_vi: ``,
                explanation: ``,
                note: ``,
              },
              {
                title: `12. Tùy chỉnh`,
                description_vi: `Bạn có thể thiết lập thời gian để excel tự động reload lại như sau`,
                explanation: ``,
                note: ``,
              },
              {
                title: ``,
                note: ``,
                explanation: ``,
                note: ``,
              },


            ]
          },
          {
            title: "Lưu trữ dữ liệu vào google sheets",
            icon: "cloud-upload",
            description_en: "",
            description_vi: "Lưu trũ dũ liệu tồn kho, chấm công, điểm danh...tụ động lên google sheets",
            data: [
              {
                title: "1. Bắt đầu",
                description_vi: `Đây là sự kết hợp giũa ứng dụng quét mã QR, Barcode và google sheets. Vậy trước tiên bạn cần phải tải về ứng dụng Scan To Google Sheets`,
                note: ``,
                explanation: ``,
              },
              {
                title: `2.  Cài đặt trang tính`,
                description_vi: `Trên trang google sheets. Chuyển sang trạng thái chia sẽ, hãy để chế độ bất kỳ ai có đường liên kết (Lưu ý: phải để chế độ nguòi chỉnh sữa), Click sao chép liên kết và cuối cùng click OK xác nhận.`,
                explanation: ``,
                note: ``,
              },
              {
                title: `3. Mở ứng dụng Scan To Google Sheets và dán địa chỉ liên kết google sheets vào ô URL`,
                description_vi: `Click biểu tượng cây viết để nhập`,
                explanation: ``,
                note: ``,
              },
              {
                title: `4. Tạo thêm Sheet mới vào các giá trị mặc định`,
                description_vi: `Nhấn thêm sheet để tạo sheet`,
                explanation: `Thêm tiêu đề và giá trị mặc định cho các cột`,
                note: ``,
              },
              {
                title: `5. Đặt trang tính mói tạo làm trang tính mạc định`,
                description_vi: `Dũ liệu sau khi quét mã QR, Bar code sẽ được gủi vào trang tính mặc định`,
                explanation: ``,
                note: ``,
              },
              {
                title: `6. Quét mã và gủi`,
                description_vi: `Giò đây bạn có thể quét và lưu trữ dữ liệu cần thiết`,
                explanation: ``,
                note: ``,
              },
              {
                title: `7. Kết quả`,
                description_vi: ``,
                explanation: ``,
                note: ``,
              },
            ]
          },
        ]
      },
    ]
  },
  {
    category: 'list',
    data: [
      {
        title: 'Shortcut',
        vi: "Phím tắt hữu ích",
        icon: "keyboard",
        data: [{
          title: 'Shortcut',
          icon: "",
          description_vi: "Tổng hợp tất cả các phím tắt excel hữu ích",
          description_en: "All helpfull shortcuts in one",
          data: [
            {
              "id": "PT1",
              "title": "#1.1. Nhóm phím tắt điều hướng",
              "description": ""
            },
            {
              "id": "PT2",
              "title": "Các phím mũi tên",
              "description": "Di chuyển lên, xuống, sang trái, hoặc sang phải trong một bảng tính."
            },
            {
              "id": "PT3",
              "title": "ALT + TAB",
              "description": "Chuyển đổi giữa các chương trình"
            },
            {
              "id": "PT4",
              "title": "CTRL + Mũi tên trái",
              "description": "Di chuyển sang ô bên trái"
            },
            {
              "id": "PT5",
              "title": "CTRL + Mũi tên phải",
              "description": "Di chuyển sang ô bên phải"
            },
            {
              "id": "PT6",
              "title": "CTRL + các phím mũi tên",
              "description": "Di chuyển đến các ô rìa của khu vực chứa dữ liệu"
            },
            {
              "id": "PT7",
              "title": "CTRL + TAB",
              "description": "Chuyển đổi giữa các file Excel đang mở"
            },
            {
              "id": "PT8",
              "title": "CTRL + PAGE UP",
              "description": "Sang sheet bên trái"
            },
            {
              "id": "PT9",
              "title": "CTRL + PAGE DOWN",
              "description": "Sang sheet bên phải"
            },
            {
              "id": "PT10",
              "title": "HOME",
              "description": "Di chuyển về đầu dòng"
            },
            {
              "id": "PT11",
              "title": "CTRL + G",
              "description": "Hiển thị hộp thoại \"Go to\""
            },
            {
              "id": "PT12",
              "title": "TAB / phím SHIFT +TAB",
              "description": "Di chuyển một ô sang phải / sang trái trong một bảng tính."
            },
            {
              "id": "PT13",
              "title": "CTRL + HOME",
              "description": "Di chuyển về dòng và cột đầu tiên trong sheet"
            },
            {
              "id": "PT14",
              "title": "CTRL + END",
              "description": "Di chuyển về dòng và cột cuối cùng trong sheet"
            },
            {
              "id": "PT15",
              "title": "#1.2. Nhóm phím tắt thao tác",
              "description": ""
            },
            {
              "id": "PT16",
              "title": "CTRL + A",
              "description": "Bôi đen toàn bộ văn bản hoặc bảng tính"
            },
            {
              "id": "PT17",
              "title": "CTRL + N",
              "description": "Tạo file mới"
            },
            {
              "id": "PT18",
              "title": "CTRL + O",
              "description": "Mở file đã lưu"
            },
            {
              "id": "PT19",
              "title": "CTRL + P",
              "description": "In"
            },
            {
              "id": "PT20",
              "title": "CTRL + F",
              "description": "Mở hộp thoại tìm kiếm"
            },
            {
              "id": "PT21",
              "title": "CTRL + H",
              "description": "Mở hộp thoại tìm và thay thế"
            },
            {
              "id": "PT22",
              "title": "CTRL + S",
              "description": "Lưu trang"
            },
            {
              "id": "PT23",
              "title": "CTRL + W",
              "description": "Đóng trang hiện tại"
            },
            {
              "id": "PT24",
              "title": "ALT + =",
              "description": "Sử dụng chức năng Auto Sum"
            },
            {
              "id": "PT25",
              "title": "CTRL + SHIFT + A",
              "description": "Chèn dấu ( ) và các đối số sau khi nhập tên hàm"
            },
            {
              "id": "PT26",
              "title": "ALT + F4",
              "description": "Đóng trang hiện tại"
            },
            {
              "id": "PT27",
              "title": "#1.3. Nhóm phím tắt chức năng",
              "description": ""
            },
            {
              "id": "PT28",
              "title": "F2",
              "description": "Hiệu chỉnh dữ liệu trong ô"
            },
            {
              "id": "PT29",
              "title": "F3",
              "description": "Dán một tên đã đặt trong công thức"
            },
            {
              "id": "PT30",
              "title": "F4 hoặc CTRL + Y",
              "description": "Lặp lại thao tác vừa thực hiện"
            },
            {
              "id": "PT31",
              "title": "F5",
              "description": "Đi đến vị trí xác định theo tham chiếu"
            },
            {
              "id": "PT32",
              "title": "CTRL + SHIFT + L",
              "description": "Phím tắt Filter (lọc)"
            },
            {
              "id": "PT33",
              "title": "#1.4. Nhóm phím tắt sao chép",
              "description": ""
            },
            {
              "id": "PT34",
              "title": "CTRL + C",
              "description": "Sao chép"
            },
            {
              "id": "PT35",
              "title": "CTRL + D",
              "description": "Chép giá trị từ ô ở trên ô hiện hành vào ô hiện hành"
            },
            {
              "id": "PT36",
              "title": "CTRL + R",
              "description": "Chép dữ liệu từ bên trái qua phải"
            },
            {
              "id": "PT37",
              "title": "CTRL + V",
              "description": "Dán"
            },
            {
              "id": "PT38",
              "title": "CTRL + X",
              "description": "Cắt"
            },
            {
              "id": "PT39",
              "title": "CTRL + Z",
              "description": "Quay lại thao tác vừa thực hiện"
            },
            {
              "id": "PT40",
              "title": "CTRL + DELETE",
              "description": "Xoá tất cả chữ trong một dòng"
            },
            {
              "id": "PT41",
              "title": "ALT + ENTER",
              "description": "Xuống dòng trong ô"
            },
            {
              "id": "PT42",
              "title": "#1.5. Nhóm phím tắt định dạng",
              "description": ""
            },
            {
              "id": "PT43",
              "title": "CTRL + –",
              "description": "Xóa dòng, cột"
            },
            {
              "id": "PT44",
              "title": "CTRL + ;",
              "description": "Cập nhật ngày tháng"
            },
            {
              "id": "PT45",
              "title": "CTRL + 0",
              "description": "Ẩn các cột đang chọn"
            },
            {
              "id": "PT46",
              "title": "CTRL + 1",
              "description": "Gọi hộp thoại Format Cells"
            },
            {
              "id": "PT47",
              "title": "CTRL+ 5",
              "description": "Bật / tắt chế độ gạch giữa không gạch giữa"
            },
            {
              "id": "PT48",
              "title": "CTRL + 9",
              "description": "Ẩn các dòng đang chọn"
            },
            {
              "id": "PT49",
              "title": "CTRL + B (hoặc CTRL + 2)",
              "description": "Bật / tắt in đậm"
            },
            {
              "id": "PT50",
              "title": "CTRL + I (hoặc CTRL + 3)",
              "description": "Bật / tắt in nghiêng"
            },
            {
              "id": "PT51",
              "title": "CTRL + U (hoặc CTRL + 4)",
              "description": "Bật/tắt gạch chân"
            },
            {
              "id": "PT52",
              "title": "CTRL + SHIFT + –",
              "description": "Xóa đường viền (Border) cho các ô đang chọn"
            },
            {
              "id": "PT53",
              "title": "CTRL + SHIFT + +",
              "description": "Thêm dòng/cột"
            },
            {
              "id": "PT54",
              "title": "CTRL + SHIFT + #",
              "description": "Định dạng kiểu Data cho ngày, tháng, năm"
            },
            {
              "id": "PT55",
              "title": "CTRL + SHIFT + $",
              "description": "Định dạng số kiểu Curency với hai chữ số thập phân"
            },
            {
              "id": "PT56",
              "title": "CTRL + SHIFT + %",
              "description": "Định dạng số kiểu Percentage (không có chữ số thập phân)"
            },
            {
              "id": "PT57",
              "title": "CTRL + SHIFT + &",
              "description": "Thêm đường viền ngoài"
            },
            {
              "id": "PT58",
              "title": "CTRL + SHIFT + (",
              "description": "Hiển thị dòng ẩn"
            },
            {
              "id": "PT59",
              "title": "CTRL + SHIFT + :",
              "description": "Nhập thời gian"
            },
            {
              "id": "PT60",
              "title": "CTRL + SHIFT + ?",
              "description": "Định dạng kiểu Numer với hai chữ số thập phân"
            },
            {
              "id": "PT61",
              "title": "CTRL + SHIFT + ^",
              "description": "Định dạng số kiểu Exponential với hai chữ số thập phân"
            },
            {
              "id": "PT62",
              "title": "CTRL + SHIFT + ~",
              "description": "Định dạng số kiểu General"
            },
            {
              "id": "PT63",
              "title": "CTRL + SHIFT + ”",
              "description": "Chép giá trị của ô phía trên vào vị trí con trỏ của ô hiện hành"
            },
            {
              "id": "PT64",
              "title": "CTRL + SHIFT + =",
              "description": "Chèn ô trống hoặc dòng trống"
            },
            {
              "id": "PT65",
              "title": "CTRL + SHIFT + 0",
              "description": "Hiện các cột đang chọn"
            },
            {
              "id": "PT66",
              "title": "CTRL + SHIFT + 5",
              "description": "Định dạng format là phần trăm"
            },
            {
              "id": "PT67",
              "title": "CTRL + SHIFT + 9",
              "description": "Hiện các dòng đang chọn"
            },
            {
              "id": "PT68",
              "title": "ALT + H + O + I",
              "description": "Bung chiều ngang theo ô dài nhất"
            },
            {
              "id": "PT69",
              "title": "ALT + H + O + H",
              "description": "Định dạng chiều cao dòng"
            },
            {
              "id": "PT70",
              "title": "ALT + H + O + W",
              "description": "Định dạng chiều rộng cột"
            },
            {
              "id": "PT71",
              "title": "ALT + H + A + R",
              "description": "Căn ô sang phải"
            },
            {
              "id": "PT72",
              "title": "ALT + H + A + C",
              "description": "Căn giữa ô"
            },
            {
              "id": "PT73",
              "title": "ALT + H + A + L",
              "description": "Căn ô sang trái"
            },
            {
              "id": "PT74",
              "title": "#1.6. Nhóm phím tắt chọn vùng dữ liệu",
              "description": ""
            },
            {
              "id": "PT75",
              "title": "ALT + DOWN ARROW",
              "description": "Hiển thị danh sách các giá trị trong cột hiện hành"
            },
            {
              "id": "PT76",
              "title": "CTRL + ARROW",
              "description": "Di chuyển đến ô cuối cùng có chứa dữ liệu trước ô trống"
            },
            {
              "id": "PT77",
              "title": "CTRL + SHIFT + END",
              "description": "Mở rộng vùng chọn đến ô có sử dụng cuối cùng"
            },
            {
              "id": "PT78",
              "title": "CTRL + SHIFT + HOME",
              "description": "Mở rộng vùng chọn về đầu worksheet"
            },
            {
              "id": "PT79",
              "title": "CTRL + phím cách (SPACE)",
              "description": "Chọn cả cột"
            },
            {
              "id": "PT80",
              "title": "CTRL + ’",
              "description": "Chép giá trị ô phía trên vào vị trí con trỏ của ô hiện hành"
            },
            {
              "id": "PT81",
              "title": "CTRL + K",
              "description": "Chèn một Hyperlink"
            },
            {
              "id": "PT82",
              "title": "ESC",
              "description": "Bỏ qua dữ liệu đang thay đổi"
            },
            {
              "id": "PT83",
              "title": "SHIFT + ARROW",
              "description": "Chọn vùng"
            },
            {
              "id": "PT84",
              "title": "SHIFT + ENTER",
              "description": "Ghi dữ liệu vào ô và di chuyển lên trên trong vùng chọn"
            },
            {
              "id": "PT85",
              "title": "SHIFT + HOME",
              "description": "Mở rộng vùng chọn về dòng đầu tiên"
            },
            {
              "id": "PT86",
              "title": "SHIFT + PAGE DOWN",
              "description": "Mở rộng vùng chọn xuống một màn hình"
            },
            {
              "id": "PT87",
              "title": "SHIFT + PAGE UP",
              "description": "Mở rộng vùng chọn lên một màn hình"
            },
            {
              "id": "PT88",
              "title": "SHIFT + phím cách (SPACE)",
              "description": "Chọn cả dòng"
            },
            {
              "id": "PT89",
              "title": "SHIFT + F2",
              "description": "Chèn comment"
            },
            {
              "id": "PT90",
              "title": "SHIFT + TAB",
              "description": "Ghi dữ liệu vào ô vào di chuyển qua trái vùng chọn"
            },
            {
              "id": "PT91",
              "title": "TAB",
              "description": "Ghi dữ liệu vào ô vào di chuyển qua phải vùng chọn"
            },
            {
              "id": "PT92",
              "title": "BACKSPACE",
              "description": "Xóa ký tự bên trái của con trỏ văn bản, hoặc xóa các lựa chọn"
            },
            {
              "id": "PT93",
              "title": "DELETE",
              "description": "Xóa ký tự bên phải của con trỏ văn bản, hoặc xóa các lựa chọn"
            },
            {
              "id": "PT94",
              "title": "CTRL + DELETE",
              "description": "Xóa văn bản đến cuối dòng"
            },
            {
              "id": "PT95",
              "title": "CTRL + :",
              "description": "Chèn thời gian hiện tại"
            },
            {
              "id": "PT96",
              "title": "#1.7. Nhóm phím tắt khác",
              "description": ""
            },
            {
              "id": "PT97",
              "title": "ALT + D P",
              "description": "Insert / PivotTable"
            },
            {
              "id": "PT98",
              "title": "ALT + A E",
              "description": "Data / Text to Column"
            },
            {
              "id": "PT99",
              "title": "ALT + D B",
              "description": "Data / Subtotal"
            },
            {
              "id": "PT100",
              "title": "ALT + O H U",
              "description": "Hiện sheet đã ẩn"
            },
            {
              "id": "PT101",
              "title": "ALT + O H H",
              "description": "Ẩn sheet"
            },
            {
              "id": "PT102",
              "title": "ALT + O C A",
              "description": "Tự canh chỉnh độ rộng cột"
            },
            {
              "id": "PT103",
              "title": "ALT + E S",
              "description": "Dán Special"
            },
            {
              "id": "PT104",
              "title": "ALT + D F F",
              "description": "Data / Filter"
            },
            {
              "id": "PT105",
              "title": "ALT + W F + ENTER",
              "description": "View / Freeze hoặc Unfreeze Panes"
            },
            {
              "id": "PT106",
              "title": "ALT + W S",
              "description": "View / Split"
            },
            {
              "id": "PT107",
              "title": "ALT + N + (Type of chart)",
              "description": "Chèn biểu đồ"
            }
          ]
        }
        ]
      },
      {
        title: 'Printing',
        icon: "print",
        vi: "In ấn",
        data: [
          {
            title: "Thiết lập vùng in",
            icon: "tab-unselected",
            description_en: "",
            description_vi: "Nếu bạn đặt một vùng in trong Excel, chỉ vùng đó sẽ được in. Vùng in được lưu khi bạn lưu sổ làm việc.",
            data: [
              {
                title: "1. Chọn một dải ô",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "2. Trên Page Layout tab, trong nhóm Page Setup, hãy bấm Print Area",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "3. Nhấp vào Đặt Khu vực In",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "4. Lưu, đóng và mở lại tệp Excel",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "5.Trên tab File, bấm Print",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "6.Kết quả. Xem bản xem trước bản in bên dưới. Chỉ vùng in sẽ được in",
                description_vi: "",
                note: "",
                explanation: "",
              },
            ]
          },
          {
            title: "Ngắt trang",
            icon: "format-page-break",
            description_en: "",
            description_vi: "Chèn dấu ngắt trang trong Excel để chỉ định nơi trang mới sẽ bắt đầu trong bản in",
            data: [
              {
                title: "1. Chọn hàng đầu tiên của trang mới.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "2. Trên tab Bố trí Trang, trong nhóm Thiết lập Trang, hãy bấm Ngắt.",
                description_vi: "",
                note: "",
                explanation: "",

              },
              {
                title: "3. Nhấp vào Chèn Ngắt Trang.",
                description_vi: "Excel sẽ hiển thị một đường liền nét (ngắt trang thủ công) để cho bạn biết nơi trang mới bắt đầu. Đường đứt nét là các ngắt trang được chèn tự động bởi Excel.",
                note: "Lưu ý: theo cách tương tự, bạn có thể chọn cột để chèn ngắt trang dọc.",
                explanation: "",

              },
              {
                title: "4. Trên tab Tệp, bấm In để xem trước bản in.",
                description_vi: "",
                note: "Lưu ý: để loại bỏ ngắt trang ngang, hãy chọn một ô bên dưới ngắt trang mà bạn muốn loại bỏ và nhấp vào Ngắt, Xóa Ngắt Trang. Để loại bỏ tất cả ngắt trang thủ công, hãy nhấp vào Ngắt, Đặt lại Tất cả Ngắt Trang. Bạn không thể xóa ngắt trang tự động.",
                explanation: "",
              },
              {
                title: "",
                description_vi: "",
                note: "",
                explanation: "",
              },
            ]
          },
          {
            title: "Headers and Footers",
            icon: "page-layout-header-footer",
            description_en: "",
            description_vi: "Hướng dẫn bạn cách thêm thông tin vào đầu trang (đầu mỗi trang in) hoặc chân trang (cuối mỗi trang in) trong Excel.",
            data: [
              {
                title: "1. Trên tab View, trong nhóm Workbook Views group, hãy bấm Page Layout, để chuyển sang dạng xem Bố trí Trang.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: `2. Nhấp vào vị trí "Click to add header"`,
                description_vi: "",
                note: "",
                explanation: "Tab theo ngữ cảnh của Header/Footer sẽ kích hoạt.",
              },
              {
                title: "3. Trên Design tab, trong nhóm Header & Footer Elements group, hãy bấm Current Date  để thêm ngày hiện tại (hoặc thêm thời gian hiện tại, tên tệp, tên trang tính, v.v.).",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "Kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "4. Bạn cũng có thể thêm thông tin vào phần bên trái và bên phải của tiêu đề. Ví dụ: nhấp vào phần bên trái để thêm tên công ty của bạn.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "5. Nhấp vào một nơi khác trên trang tính để xem tiêu đề.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "6. Trên Design tab, trong nhóm Options, bạn có thể thêm header/footer của trang đầu tiên và header/footer khác cho các trang chẵn và lẻ khác.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "7. Trên View tab , trong nhóm Workbook Views, bấm Normal, để chuyển về dạng xem bình thường.",
                description_vi: "",
                note: "",
                explanation: "",
              },

            ]
          },
          {
            title: "Đánh số trang",
            icon: "numeric-1-box-multiple-outline",
            description_en: "",
            description_vi: "Hướng dẫn bạn cách chèn số trang trong Excel.",
            data: [
              {
                title: "1. Trên tab Dạng xem, trong nhóm Workbook Views, hãy bấm Page Layout, để chuyển sang dạng xem Page Layout.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: `2. Nhấp vào "Click to add footer"`,
                description_vi: "Tab theo ngữ cảnh của Header/Footer sẽ kích hoạt.",
                note: "",
                explanation: "",
              },
              {
                title: "3. Trên Design tab, trong Header & Footer Elements, click Page Number để thêm đanh số trang.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: `4. đánh vào từ "of" `,
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "5. Trong Design tab, trong Header & Footer Elements group, click Number of Pages để thêm phần số tổng trang.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "6. Nhấp vào một nơi khác trên trang tính để xem phần footer.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "7. Trên View tab, trong Workbook Views group, click Normal, để chuyển sang chế độ xem bình thường",
                description_vi: "",
                note: "",
                explanation: "",
              },

            ]
          },
          {
            title: "In tiêu đề",
            icon: "subtitles-outline",
            description_en: "",
            description_vi: "Bạn có thể chỉ định các hàng và cột trong Excel sẽ được in trên mỗi trang in. Điều này có thể làm cho bản in của bạn dễ đọc hơn.",
            data: [
              {
                title: "1. Trên Page Layout tab, trong Page Setup, click Print Titles.",
                description_vi: "",
                note: "",
                explanation: "Hộp thoại Thiết lập Trang xuất hiện.",
              },
              {
                title: `2. Để lặp lại hàng 1 ở đầu mỗi trang in, hãy nhấp vào hộp tương ứng và chọn hàng 1.`,
                description_vi: "",
                note: "Lưu ý: theo cách tương tự, bạn có thể lặp lại các cột ở bên trái của mỗi trang in.",
                explanation: "",
              },
              {
                title: "3. Click OK.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "4. Trên File tab, click Print để xem trước.",
                description_vi: "hãy để ý phần số trang chuyển đổi qua lại sẽ thấy tiêu đề xuất hiện ở cả hai trang",
                note: "",
                explanation: "",
              },
              {
                title: "",
                description_vi: "",
                note: "",
                explanation: "",
              },
            ]
          },
          {
            title: "Canh giữa trang",
            icon: "format-align-center",
            description_en: "",
            description_vi: "Để tự động căn giữa một dải ô trên trang in trong Excel, hãy thực hiện các bước sau.",
            data: [
              {
                title: "1. Trên File tab, click Print..",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "2. Nhấp vào 'Custom Margins' từ danh sách thả xuống.",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "3. Tiếp theo, đánh dấu check vào ô Horizontally và Vertically",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "4. Click OK.",
                description_vi: "",
                note: "",
                explanation: "",
              },

            ]
          },
        ]
      },
      {
        title: 'VBA',
        vi: "VBA cơ bản",
        icon: "code",
        data: [
          {
            title: "Tạo macro",
            icon: "gesture-tap-button",
            description_en: "With Excel VBA you can automate tasks in Excel by writing so called macros. In this chapter, learn how to create a simple macro which will be executed after clicking on a command button. First, turn on the Developer tab.",
            description_vi: "Với Excel VBA, bạn có thể tự động hóa các tác vụ trong Excel bằng cách viết cái gọi là macro. Trong chương này, hãy tìm hiểu cách tạo một macro đơn giản sẽ được thực thi sau khi nhấp vào nút lệnh. Đầu tiên, hãy bật tab Nhà phát triển.",
            data: [
              {
                title: "1. Chọn tab File > Options > Customize Ribbon và đánh dấu tick vào ô Developer như hình:",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "2. Bên tap Developer, click chọn Insert > Button để vẽ một button rồi đặt tên như hình",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "3. Nhấn chuột phải lên button vừa tạo, chọn View code hoặc chọn View code trên thanh công cụ",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "4. Ở cửa sổ hiện lên, nhập vào dòng code như hình",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "5. Click nút Run trên thanh công cụ",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "6. Hộp thoại hiện ra, chọn marco vừa tạo và Click Run",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "7. Đóng cửa sổ VBA và quay lại màn hình excel. Kết quả như hình bên dưới",
                description_vi: "",
                note: "",
                explanation: "Hãy thử xóa dữ liệu ô A1 và Click button nhiều lần để xem giá trị",
              },
            ]
          },
          {
            title: "Message box",
            icon: "message",
            description_en: "",
            description_vi: "MsgBox là một hộp thoại trong Excel VBA mà bạn có thể sử dụng để thông báo cho người dùng về chương trình của mình. Đặt một nút lệnh trên trang tính của bạn và thêm các dòng mã sau:",
            data: [
              {
                title: "1. Tạo button tên là Button1, nhấp vào button và chọn View code để mở cửa sổ VBA, nhập đoạn code như sau:",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "2. Quay về trang excel và nhấn vào button, hộp thoại như sau sẽ xuất hiện",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "3. Hãy thử gán biến trá trị hiện có ô excel",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "4. Bạn sẽ được kết quả như sau:",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "5. Để thêm dòng mới ta sử dụng mã vbNewLine kết hợp với dấu & như sau:",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "6. Ta được kết quả với 2 dòng thông báo như sau:",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: " *** Nào, bây giờ thử tăng độ khó lên chút nhé, chúng ta sẽ thử MsgBox Function ***",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "8. Phần kế tiếp Message Box Function",
                description_vi: "Hàm MsgBox trong Excel VBA có thể trả về một kết quả trong khi MsgBox đơn giản thì không.",
                note: "",
                explanation: "",
              },
              {
                title: "8.1. Đầu tiên, chúng ta khai báo một biến có tên là answer kiểu Integer: ",
                description_vi: "Dim answer As Integer",
                note: "",
                explanation: "",
              },
              {
                title: "8.2. Sử dụng hàm MsgBox để khởi tạo câu trả lời biến với đầu vào từ người dùng.",
                description_vi: `answer = MsgBox("Ban co muon xoa du lieu khong?", vbYesNo + vbQuestion, "Xoa du lieu")`,
                note: "Lưu ý: Đặt con trỏ của bạn vào vbYesNo trong Visual Basic Editor và nhấp vào F1 để xem bạn có thể sử dụng các nút và biểu tượng nào khác. Thay vì các hằng vbYesNo và vbQuestion, bạn cũng có thể sử dụng các giá trị 4 và 32 tương ứng",
                explanation: "Hàm MsgBox, khi sử dụng dấu ngoặc đơn, có ba đối số. Phần đầu tiên được sử dụng cho thông báo trong hộp tin nhắn. Sử dụng phần thứ hai để chỉ định các nút và biểu tượng bạn muốn xuất hiện trong hộp thư. Phần thứ ba được hiển thị trên thanh tiêu đề của hộp thư.",
              },
              {
                title: "8.3. Nếu người dùng nhấp vào nút Có, Excel VBA sẽ làm trống trang tính. Nếu người dùng nhấp vào nút Không, không có gì xảy ra. Thêm các dòng mã sau để đạt được điều này",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "8.4 Nhấn nút để xem kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "8.5 Hộp thông báo hiện ra, chọn Yes và xem kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "Kết: Chúng ta hãy cùng xem lại toàn bộ code:",
                description_vi: "",
                note: "",
                explanation: "",
              },
              //Input function
              {
                title: "*** Dừng lại một chút nào! Bạn đã hiểu rõ những phần phía trên chưa, nếu chưa thì hãy đọc lại một lần nữa. Nếu Ok thì học tiếp InputBox Function ***"
                ,
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "9.1 Đầu tiên, khai báo biến Giatri kiểu Variant.",
                description_vi: "Bạn có thể sử dụng hàm InputBox trong Excel VBA để nhắc người dùng nhập giá trị.Tạo một button trên trang tính của bạn và thêm các dòng mã sau:",
                note: "Lưu ý: chúng tôi sử dụng một biến kiểu Variant ở đây vì một biến Variant có thể chứa bất kỳ loại giá trị nào. Bằng cách này, người dùng có thể nhập văn bản, số, v.v.",
                explanation: "Dim Giatri As Variant",
              },
              {
                title: "9.2 Thêm dòng mã sau để hiển thị hộp thoại nhập.",
                description_vi: `Giatri = InputBox("Xin moi nhap gia tri")`,
                note: "",
                explanation: "",
              },
              {
                title: "9.3 Ghi giá trị của myValue vào ô A1.",
                description_vi: `Giatri = InputBox("Xin moi nhap gia tri") Khi người dùng nhập giá trị vạò hộp thoại vào nhấn nút sẽ được kết quả như hình.`,
                note: "",
                explanation: "",
              },
              {
                title: "9.4 Hàm InputBox có nhiều đối số tùy chọn hơn. Dòng mã sau đây hiển thị một hộp nhập với tiêu đề được hiển thị trên thanh tiêu đề và có giá trị mặc định. Giá trị mặc định sẽ được sử dụng nếu không có đầu vào nào khác được cung cấp.",
                description_vi: `Giatri = InputBox("Xin moi nhap gia tri", "Xin chao", 5)`,
                note: "",
                explanation: "",
              },
              {
                title: "9.5 Kết quả khi người dùng chỉ nhấp vào nút OK.",
                description_vi: "",
                note: "Lưu ý: Đặt con trỏ của bạn vào InputBox trong Visual Basic Editor và nhấp vào F1 để được trợ giúp về mặt khác",
                explanation: "",
              },
            ]
          },
          {
            title: "Ẩn hiện cột và hàng",
            icon: "arrow-collapse-horizontal",
            description_en: "",
            description_vi: "Hãy tìm hiểu về cách tạo nút nhấn để ẩn và hiện các cột hay hàng mong muốn.",
            data: [
              {
                title: "1. Tạo nút bấm, bạn có thể tạo bằng 2 cách: dùng INSERT > Shape hoặc chọn tab DEVELOPER > Insert > Button. Ở đây chúng ta sẽ tạo bằng Shape. ",
                description_vi: "Ví dụ vẽ một hình chữ nhật như sau, đặt tên cho nó là Ẩn hàng",
                note: "",
                explanation: "",
              },
              {
                title: "2. Truy cập của sổ VBA thông qua tổ hợp phím Alt + 11 hoặc thông qua tab DEVELOPER > View Code",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "3. Tạo một Module mới",
                description_vi: "Click chuột lên tên project của bạn > chuột phải > Insert > Module",
                note: "",
                explanation: "Ở đây chúng ta sẽ tạo Module, vì code bên trong Module sẽ hoạt động ở bất kỳ sheet nào trong cùng một file excel (workbook), còn nếu bạn chỉ muốn cho một sheet thì hãy viết code trực tiếp bên trong sheet đó.",
              },
              {
                title: "4. Nhập vào đoạn code sau",
                description_vi: "",
                note: "",
                explanation: `Để ẩn cột thì bạn thay đổi vùng ví dụ: RANGE("A:C"), sau đó thay thuộc tính EntireRow = EntireColumn`,
              },
              {
                title: "5. Bên trang excel chọn Nút đã tạo trước đó, click chuột phải chọn Assign macro",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "6. Chọn tên marco đã tạo trước đó và click OK xác nhận",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "7. Kết quả",
                description_vi: "",
                note: "",
                explanation: "",
              },

            ]
          },
          {
            title: "Tô màu cột và hàng",
            icon: "color-helper",
            description_en: "",
            description_vi: "Hãy tưởng tượng bạn có một file excel với rất nhiều hàng và cột và bạn gặp khó trong việc tìm giá trị giao nhau giữa hàng và cột. Hướng dẫn này sẽ giúp bạn giải quyết được điều đó.",
            data: [
              {
                title: "1. Trong trang excel truy cập của sổ VBA thông qua tổ hợp phím Alt + 11 hoặc thông qua tab DEVELOPER > View Code",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "2. Click vào sheet chứa bảng dữ liệu bảng cần làm nổi cột hàng khi click",
                description_vi: "Chọn sheet > chuột phải > View code hoặc nhấp đúp chuột",
                note: "",
                explanation: "",
              },
              {
                title: "3 Nhập vào đoạn code sau",
                description_vi: `
Private Sub Worksheet_SelectionChange(ByVal Target As Range)
On Error Resume Next
Cells.Interior.ColorIndex = 0
ActiveCell.EntireRow.Interior.ColorIndex = 19
ActiveCell.Interior.ColorIndex = 4
End Sub`,
                note: "",
                explanation: `Bạn có thể thay số màu khác với giá trị từ 1 đến 56, chi tiết các màu tham khảo thêm tại http://dmcritchie.mvps.org/excel/colors.htm`,
              },
              {
                title: "4. Bên trang excel bạn nhấp chuột lên ô bất kỳ để kiểm tra kết quả",
                description_vi: "",
                note: "Đối với cách này, khi bạn tô màu bất kỳ ô nào, khi bạn click chuột lên ô bất kỳ, ô bạn tô màu sẽ bị mất. Lí do là excel reset màu tất cả các ô và chỉ cột và hàng bạn chọn có màu. Trong trường hợp này để giữ màu các ô đó bạn cần sử dụng Conditional Formating để tô màu cho các ô đó.",
                explanation: ``,
              },

            ]
          },
          {
            title: "Chèn ảnh vào cell",
            icon: "picture-in-picture-bottom-right",
            description_en: "",
            description_vi: "Dễ dàng chèn và tự động canh chỉnh hình ảnh cho phù hợp với kích thước ô trong excel sử dụng VBA",
            data: [
              {
                title: "1. Trong trang excel. chỉnh một ô dùng làm chổ chèn ảnh, căng chỉnh kích thước theo ý bạn. Tạo thêm một nút bấm như các bài trước (hãy sử dụng INSERT > Shape).",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "2. Truy cập của sổ VBA thông qua tổ hợp phím Alt + 11 hoặc thông qua tab DEVELOPER > View Code",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "3. Tạo một Module mới",
                description_vi: "Click chuột lên tên project của bạn > chuột phải > Insert > Module",
                note: "",
                explanation: "Ở đây chúng ta sẽ tạo Module, vì code bên trong Module sẽ hoạt động ở bất kỳ sheet nào trong cùng một file excel (workbook), còn nếu bạn chỉ muốn cho một sheet thì hãy viết code trực tiếp bên trong sheet đó.",
              },
              {
                title: "4. Nhập vào đoạn code sau",
                description_vi: `
Sub Chen_Hinh()
    Dim profile As String
    Dim image As Shape
    On Error GoTo 0
    Dim fd As FileDialog
    Set fd = Application.FileDialog(msoFileDialogFilePicker)
    With fd
        .Filters.Clear
        .Filters.Add "Picture Files", "*.bmp;*.jpg;*.gif;*.png"
        .ButtonName = "Chon"
        .AllowMultiSelect = True
        .Title = "Chon Hinh"
        .InitialView = msoFileDialogViewDetails
        .Show
    End With
    ActiveSheet.Range("A2").Select
    Set image = ActiveSheet.Shapes.AddPicture(Filename:=fd.SelectedItems(1), _
    LinkToFile:=msoFalse, _
    SaveWithDocument:=msoCTrue, _
    Left:=ActiveSheet.Range("A2").Left + 3, _
    Top:=ActiveSheet.Range("A2").Top + 3, _
    Width:=ActiveSheet.Range("A2").Width - 7, _
    Height:=ActiveSheet.Range("A2").Height - 7)
    image.ZOrder msoSendToBack
    image.LockAspectRatio = msoTrue
    On Error Resume Next
End Sub`,
                note: "",
                explanation: `fd: là thiết lập cửa sổ chọn hình ảnh để chèn, khi bạn nhấn nút. Top, Left là vị trí tọa độ trên, trái. Width, Hight là kích thước của ảnh khi chèn vào ô.`,
              },
              {
                title: "5. Bên trang excel chọn Nút đã tạo trước đó, click chuột phải chọn Assign macro",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: "6. Chọn tên marco đã tạo trước đó và click OK xác nhận",
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: `7. Click vào nút "Chèn hình" để kích hoạt macro. Hộp thoại chọn file hiện lên, chọn hình cần chèn và Click "Chon" để xác nhận`,
                description_vi: "",
                note: "",
                explanation: "",
              },
              {
                title: `8. Kết quả`,
                description_vi: "",
                note: "",
                explanation: "Với cách làm này bạn có thể áp dụng chèn ảnh hàng loạt, vừa nhanh vừa chính xác. Hãy tạo thêm macro trong một module và thay đổi vùng chèn ảnh cho các ô khác mà bạn muốn làm giống.",
              },

            ]
          },
        ]
      },

    ]
  },
]
export default FlatListData