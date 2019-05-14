import React, { Component } from 'react';
export default class Post2 extends Component {
  render() {
    const { pageNumber, handleNextPage, handlePrePage } = this.props;
    return (
      <>
        <div className="box-2 mb-3">
          <div className="box-2-header d-flex flex-column flex-md-row">
            <h2 className="box-2-title mb-md-0 mb-3">Thông tin việc làm</h2>

            <div className="align-self-md-center ml-md-auto">
              <p
                className="fs-12 text-gray-light mb-1"
                style={{ fontSize: '20px', fontWeight: '600' }}
              >
                Khả năng nhận được khoản vay
              </p>

              <div className="progress progress-style-1">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: '40%' }}
                  aria-valuenow="40"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <span className="progress-tooltip">40%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="box-2-body">
            <div className="form-group row">
              <label
                for="fc-1"
                className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Nghề nghiệp
              </label>
              <div className="col-lg-10">
                <select
                  className="form-control form-control-lg fs-13 px-3 rounded"
                  name="job"
                >
                  <option value="" selected hidden>
                    Chọn nghề nghiệp
                  </option>
                  <option value="30"> Nhân viên văn phòng </option>
                  <option value="24"> Nhân viên nhà nước </option>
                  <option value="26"> Kinh doanh tự do </option>
                  <option value="32"> Công nhân nhà máy </option>
                  <option value="33"> Doanh nghiệp tư nhân </option>
                  <option value="31"> Hộ kinh doanh cá thể </option>
                  <option value="29"> Ngành nghề khác </option>
                </select>
              </div>
            </div>

            <div className="form-group row">
              <label
                for="fc-5"
                className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Tên công ty
              </label>
              <div className="col-lg-10">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="txtcompany"
                  name="txtcompany"
                  placeholder=""
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                for="fc-5"
                className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Địa chỉ công ty
              </label>
              <div className="col-lg-10">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="txtAddcompany"
                  name="txtAddcompany"
                  placeholder=""
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                for="fc-5"
                className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Thu nhập
              </label>
              <div className="col-lg-10">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  value=""
                  onkeyup="reformatText(this)"
                  id="txtincome"
                  name="txtincome"
                  placeholder=""
                />
              </div>
            </div>

            <div className="form-group row">
              <label
                for="fc-2"
                className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Tên ngân hàng <br />
                nhận giải ngân
              </label>
              <div className="col-lg-10">
                <select
                  className="form-control form-control-lg fs-13 px-3 rounded"
                  name="bank"
                >
                  <option value="" selected hidden>
                    Chọn ngân hàng
                  </option>
                  <option value="1"> ACB - NH TMCP A CHAU </option>
                  <option value="2"> AGRIBANK - NH NO VA PT NT VN </option>
                  <option value="3">
                    {' '}
                    AN BINH - NH TMCP AN BINH (ABBBANK){' '}
                  </option>
                  <option value="4">
                    {' '}
                    ANZ - AUSTRALIA &amp;amp; ZEALAND BANKING VN{' '}
                  </option>
                  <option value="5"> BAC A - NH TMCP BAC A (NASB) </option>
                  <option value="6">
                    {' '}
                    BAN VIET - NH TMCP BAN VIET(VIETCAPITALBANK){' '}
                  </option>
                  <option value="7"> BANKNET - BANKNET </option>
                  <option value="8"> BAO VIET - NH TMCP BAO VIET (BVB) </option>
                  <option value="9">
                    {' '}
                    BCB - BANK OF COMMUNICATIONS CN HCM{' '}
                  </option>
                  <option value="10"> BIDV - NH TMCP DT VA PT VN </option>
                  <option value="11">
                    {' '}
                    BIDVC - NH DT VA PT CAMPUCHIA CN HN{' '}
                  </option>
                  <option value="12">
                    {' '}
                    BIDVC - NH DT VA PT CAMPUCHIA CN HCM{' '}
                  </option>
                  <option value="13"> BKB - BANGKOK BANK VN </option>
                  <option value="14"> BNP - BNP PARIBAS BANK CN HCM </option>
                  <option value="15"> BNP - BNP PARIBAS BANK CN HN </option>
                  <option value="16"> BOC - BANK OF CHINA CN HCM </option>
                  <option value="17"> BPCEIOM - BPCEIOM VN CN HCM </option>
                  <option value="18"> BTMU - BANK OF TOKYO </option>
                  <option value="19">
                    {' '}
                    BTMU - BANK OF TOKYO MITSUBISHI CN HN{' '}
                  </option>
                  <option value="20"> CALYON - CREDIT AGRICOLE CIB (CA </option>
                  <option value="21">
                    {' '}
                    CCB - CHINA CONSTRUCTION BANK CORP.CN HCM{' '}
                  </option>
                  <option value="22"> CITIBANK - CITI BANK VN CN HN </option>
                  <option value="23"> CITIBANK - CITI BANK VN CN HCM </option>
                  <option value="24"> CTBC - CTBC BANK CO.LTD CN HCM </option>
                  <option value="25">
                    {' '}
                    CTTC - CTY TAI CHINH NH PT TP HCM HSC{' '}
                  </option>
                  <option value="26">
                    {' '}
                    CWB - COMMONWEALTH BANK OF AU. CN HCM{' '}
                  </option>
                  <option value="27">
                    {' '}
                    DAICHUNG - NH TMCP DAI CHUNG (PVCOMBANK){' '}
                  </option>
                  <option value="28"> DBS - DBS BANK CN HCM </option>
                  <option value="29"> DEB - DEUTSCHE BANK VN CN HCM </option>
                  <option value="30"> DONG A - NH TMCP DONG A (DAB) </option>
                  <option value="31">
                    {' '}
                    EIB - NH TMCP XUAT NHAP KHAU VN(EXIMBANK){' '}
                  </option>
                  <option value="32">
                    {' '}
                    FCB - FIRST COMMERCIAL BANK CN HCM{' '}
                  </option>
                  <option value="33">
                    {' '}
                    FCB - FIRST COMMERCIAL BANK CN HN{' '}
                  </option>
                  <option value="34">
                    {' '}
                    GPBANK - NH TMCP DAU KHI TOAN CAU{' '}
                  </option>
                  <option value="35">
                    {' '}
                    HCB - HUANAN COMMERCIAL BANK CN HCM{' '}
                  </option>
                  <option value="36"> HDB - NH TMCP PHAT TRIEN TPHCM </option>
                  <option value="37"> HLB - HONG LEONG VN </option>
                  <option value="38"> HOPTAC - NH HOP TAC (CO </option>
                  <option value="39"> HSBC - HSBC CORPORATION </option>
                  <option value="40">
                    {' '}
                    IBK - INDUSTRIAL BANK OF KOREA CN HCM{' '}
                  </option>
                  <option value="41">
                    {' '}
                    IBK - NH CONG NGHIEP HAN QUOC CN HN{' '}
                  </option>
                  <option value="42"> ICBC - ICBC CN HN </option>
                  <option value="43"> IDB - INDOVINA BANK </option>
                  <option value="44"> INDIA - BANK OF INDIA CN HCM </option>
                  <option value="45">
                    {' '}
                    JPMB - JP MORGAN CHASE BANK CN HCM{' '}
                  </option>
                  <option value="46"> KBNN - KHO BAC NHA NUOC </option>
                  <option value="47">
                    {' '}
                    KEBHANA - KEB HANA BANK CN HA NOI{' '}
                  </option>
                  <option value="48"> KEBHANA - KEB HANA BANK CN HCM </option>
                  <option value="49"> KIENLONG - NH TMCP KIEN LONG </option>
                  <option value="50"> KOOKMIN - KOOKMIN BANK CN HCM </option>
                  <option value="51">
                    {' '}
                    LIENVIET - NH TMCP BUU DIEN LIEN VIET( LPB){' '}
                  </option>
                  <option value="52">
                    {' '}
                    MAYBANK - MALAYAN BANKING BERHAD CN HCM{' '}
                  </option>
                  <option value="53"> MAYBANK - MAYBANK CN HN </option>
                  <option value="54">
                    {' '}
                    MB - NH TMCP QUAN DOI (MILITARY BANK){' '}
                  </option>
                  <option value="55">
                    {' '}
                    MEGA - MEGA INTERNATIONAL COM. BANK CN HCM{' '}
                  </option>
                  <option value="56"> MIZUHO - MIZUHO BANK CN HN </option>
                  <option value="57"> MIZUHO - MIZUHO BANK CN HCM </option>
                  <option value="58"> MKB - NH TMCP PHAT TRIEN ME KONG </option>
                  <option value="59">
                    {' '}
                    MSB - NH TMCP HANG HAI (MARITIME BANK){' '}
                  </option>
                  <option value="60"> NAMA - NH TMCP NAM A(NAMABANK) </option>
                  <option value="61">
                    {' '}
                    NHCSXH - NH CHINH SACH XA HOI VN(VPSB){' '}
                  </option>
                  <option value="62"> OCB - NH TMCP PHUONG DONG </option>
                  <option value="63">
                    {' '}
                    OCBC - OVERSEA CHINESE BANKING CORP.CN HCM{' '}
                  </option>
                  <option value="64">
                    {' '}
                    OJB - NH TMCP DAI DUONG (OCEANBANK){' '}
                  </option>
                  <option value="65">
                    {' '}
                    PGBANK - NH TMCP XANG DAU PETROLIMEX{' '}
                  </option>
                  <option value="66"> QTDCS - QUY TIN DUNG CO SO </option>
                  <option value="67"> QUOCDAN - NH TMCP QUOC DAN(NCB) </option>
                  <option value="68"> SBV - NH NHA NUOC VN </option>
                  <option value="69"> SC - STANDARD CHARTERED BANK </option>
                  <option value="70"> SCB - NH TMCP SAI GON </option>
                  <option value="71">
                    {' '}
                    SCSB - SHANGHAI COM.&amp;amp; CN DONGNAI{' '}
                  </option>
                  <option value="72"> SEABANK - NH TMCP DONG NAM A </option>
                  <option value="73">
                    {' '}
                    SFC - CTY TAI CHINH CNGHIEP TAU THUY TSC{' '}
                  </option>
                  <option value="74">
                    {' '}
                    SGCT - NH TMCP SG CONGTHUONG(SAIGONBANK){' '}
                  </option>
                  <option value="75"> SHB - NH TMCP SAI GON HA NOI </option>
                  <option value="76">
                    {' '}
                    SIAM - THE SIAM COM. BANK PUBLIC CN HCM{' '}
                  </option>
                  <option value="77"> SINOPAC - SINOPAC BANK CN HCM </option>
                  <option value="78">
                    {' '}
                    SMBC - SUMITOMO MITSUI BANKING CORP.{' '}
                  </option>
                  <option value="79">
                    {' '}
                    STB - NH TMCP SAIGONTHUONGTIN(SACOMBANK){' '}
                  </option>
                  <option value="80"> SVB - SHINHAN VIETNAM BANK LTD </option>
                  <option value="81">
                    {' '}
                    TCB - NH TMCP KY THUONG (TECHCOMBANK){' '}
                  </option>
                  <option value="82">
                    {' '}
                    TFB - TAIPEI FUBON COM.BANK CN BINH DUONG{' '}
                  </option>
                  <option value="83">
                    {' '}
                    TFB - TAIPEI FUBON COM.BANK CN HCM{' '}
                  </option>
                  <option value="84">
                    {' '}
                    TFB - TAIPEI FUBON COMMERCIAL BANK CN HN{' '}
                  </option>
                  <option value="85">
                    {' '}
                    TPB - NH TMCP TIEN PHONG(TIENPHONGBANK){' '}
                  </option>
                  <option value="86">
                    {' '}
                    UOB - UNITED OVERSEAS BANK (UOB) CN HCM{' '}
                  </option>
                  <option value="87"> VAB - NH TMCP VIET A </option>
                  <option value="88">
                    {' '}
                    VCB - NH TMCP NGOAI THUONG (VIETCOMBANK){' '}
                  </option>
                  <option value="89"> VDB - NH PHAT TRIEN VIET NAM </option>
                  <option value="90">
                    {' '}
                    VID - NH TNHH MTV PUBLIC VIET NAM{' '}
                  </option>
                  <option value="91"> VIETBANK - NH TMCP VN THUONG TIN </option>
                  <option value="92">
                    {' '}
                    VIETIN - NH TMCP CONG THUONG VIET NAM{' '}
                  </option>
                  <option value="93"> VNCB - NH TMCP XAY DUNG VN </option>
                  <option value="94">
                    {' '}
                    VPB - NH TMCP VN THINH VUONG(VPBANK){' '}
                  </option>
                  <option value="95"> VRB - NH LD VIET NGA </option>
                  <option value="96">
                    {' '}
                    VSB - VINASIAM BANK ( LD VIET THAI){' '}
                  </option>
                  <option value="97"> WRB - WOORI BANK CN HN </option>
                  <option value="98"> WRB - WOORI BANK CN </option>
                  <option value="101"> VIB - NH Ngân hàng Quốc Tế VIB </option>
                </select>
                <small className="form-text text-muted">
                  Nếu chưa có tài khoản ngân hang, quý khách vui long tạo tài
                  khoản tại ngân hàng gần nhất để nhận được khoản vay nhanh
                  nhất.
                </small>
              </div>
            </div>

            <div className="form-group row">
              <label
                for="fc-5"
                className="col-lg-2 col-form-label col-form-label-lg text-nowrap"
                style={{ fontSize: '18px' }}
              >
                Số tài khoản/ Số thẻ
              </label>
              <div className="col-lg-10">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="txtBankNumber"
                  name="txtBankNumber"
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <a
            className="btn btn-lg btn-gray-lighter px-md-6"
            onClick={() => handlePrePage()}
            style={{
              backgroundColor: '#d1d1d1',
              fontSize: '14px',
              marginBottom: '25px'
            }}
          >
            QUAY LẠI
          </a>
          <button
            onClick={() => handleNextPage()}
            className="btn btn-lg btn-warning text-white px-md-6 ml-auto"
            style={{ fontSize: '14px', marginBottom: '25px' }}
          >
            {pageNumber !== 5 ? 'TIẾP TỤC' : 'HOÀN THÀNH'}
          </button>
        </div>
      </>
    );
  }
}
