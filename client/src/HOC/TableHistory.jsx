/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Package, Status } from '../utils/getPackage';
import { formatDate, formatHours } from '../utils/formatTime';
import classnames from 'classnames';
const TableHistory = props => {
  const { posts, title } = props;
  return (
    <div className="tm-dtcv bg-white border border-gray p-3 px-md-5 pb-md-5 pt-md-4">
      <h2 className="text-uppercase fs-16 fw-6 mb-0">{title}</h2>

      <hr className="mb-3" />

      <div className="row gutter-2 gutter-lg-3 mb-4">
        <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
          <span
            className="select2 select2-container select2-container--bootstrap"
            dir="ltr"
            style={{ width: '249.5px' }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabindex="0"
                aria-labelledby="select2-cbProduct-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-cbProduct-container"
                  title="Chọn Gói Sản Phẩm..."
                >
                  Chọn Gói Sản Phẩm...
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
          <select
            className="form-control border-primary rounded-0 fs-15 form-control-default select2-hidden-accessible"
            id="cbProduct"
            tabindex="-1"
            aria-hidden="true"
          >
            <option value="">Chọn Gói Sản Phẩm...</option>
            {Package.map((pag, key) => {
              return (
                <option key={key} value={pag}>
                  {pag[1]}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
          <span
            className="select2 select2-container select2-container--bootstrap"
            dir="ltr"
            style={{ width: '249.5px' }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabindex="0"
                aria-labelledby="select2-cbStatus-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-cbStatus-container"
                  title="Tất cả trạng thái"
                >
                  Tất cả trạng thái
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
          <select
            className="form-control border-primary rounded-0 fs-15 form-control-default select2-hidden-accessible"
            id="cbStatus"
            tabIndex="-1"
            aria-hidden="true"
          >
            <option value="">Tất cả trạng thái</option>
            {Status.map(sts => {
              return (
                <option key={sts[0]} value={sts[0]}>
                  {sts[1]}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
          <a
            className="btn btn-primary text-uppercase text-white fs-16"
            href="#"
          >
            Tìm kiếm
          </a>
        </div>
      </div>

      <div id="divLoanAllNew">
        {Object.keys(posts).length === 0 && (
          <div class="table-responsive">
            <h3 class="text-center border py-3" style={{ color: '#ed522e' }}>
              Hiện tại chưa có đơn vay được chuyển đến bạn
            </h3>
          </div>
        )}
        {Object.keys(posts).length > 0 && (
          <div className="table-responsive">
            <table
              className="tm-table-1 table text-gray-light"
              style={{ minWidth: 'unset' }}
            >
              <tbody>
                <tr>
                  <th className="text-center hidden-xs-down">
                    <div className="border-right">STT</div>
                  </th>
                  <th className="text-center hidden-xs-down">
                    <div className="border-right">Mã hợp đồng</div>
                  </th>
                  <th className="text-center ">
                    <div className="border-right">Thời gian tạo</div>
                  </th>
                  <th className="text-center hidden-xs-down">
                    <div className="border-right">Gói vay</div>
                  </th>
                  <th className="text-center hidden-xs-down">
                    <div className="border-right">Thời gian vay</div>
                  </th>
                  <th className="text-center">
                    <div className="border-right">Số tiền</div>
                  </th>
                  <th className="text-center">
                    <div className="border-right">Nhận đơn</div>
                  </th>
                  <th className="text-center">
                    <div className="border-right">Trạng thái</div>
                  </th>
                  <th className="text-center">&nbsp;</th>
                </tr>
                {posts.map((post, key) => {
                  return (
                    <tr key={key} style={{ cursor: 'pointer' }} className="">
                      <td
                        className="h-100 hidden-xs-down link-hover-undertext"
                        data-toggle="modal"
                        href="#modal-ds-nguoi-cho-vay"
                        onclick="ShowListLender(1587281);"
                      >
                        <div className="td-inner d-flex justify-content-center h-100">
                          <ul className="list-h-1 align-self-start mb-0">
                            <li className="list-h-1__item">{key + 1}</li>
                          </ul>
                        </div>
                      </td>
                      <td
                        className="h-100 hidden-xs-down link-hover-undertext"
                        data-toggle="modal"
                        href="#modal-ds-nguoi-cho-vay"
                        onclick="ShowListLender(1587281);"
                      >
                        <div className="td-inner d-flex justify-content-center h-100">
                          <ul className="list-h-1 align-self-start mb-0">
                            <li className="list-h-1__item">
                              HĐ - {post._id.substr(2, 8).toUpperCase()}
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td
                        className="h-100 link-hover-undertext"
                        data-toggle="modal"
                        href="#modal-ds-nguoi-cho-vay"
                        onclick="ShowListLender(1587281);"
                      >
                        <div className="td-inner d-flex justify-content-center h-100">
                          <ul className="list-h-1 align-self-start mb-0">
                            <li className="list-h-1__item">
                              {formatHours(post.date.fromDate)}{' '}
                              {formatDate(post.date.fromDate)}
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td
                        className="hidden-xs-down link-hover-undertext"
                        data-toggle="modal"
                        href="#modal-ds-nguoi-cho-vay"
                        onclick="ShowListLender(1587281);"
                      >
                        <div className="td-inner d-flex justify-content-center h-100">
                          <ul className="list-h-1 align-self-start mb-0">
                            <li className="list-h-1__item">
                              {
                                Package.filter(
                                  a => a[0] === post.typeOfLoan
                                )[0][1]
                              }
                            </li>
                          </ul>
                        </div>
                      </td>

                      <td
                        className="hidden-xs-down link-hover-undertext"
                        data-toggle="modal"
                        href="#modal-ds-nguoi-cho-vay"
                        onclick="ShowListLender(1587281);"
                      >
                        <div className="td-inner d-flex justify-content-center h-100">
                          <ul className="list-h-1 align-self-start mb-0">
                            <li className="list-h-1__item">
                              {post.date.duration} Ngày
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td
                        className="link-hover-undertext"
                        data-toggle="modal"
                        href="#modal-ds-nguoi-cho-vay"
                        onclick="ShowListLender(1587281);"
                      >
                        <div className="td-inner d-flex justify-content-center h-100">
                          <ul className="list-h-1 align-self-start mb-0">
                            <li className="list-h-1__item">
                              {post.loanNumber},000,000 VNĐ
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td
                        className="link-hover-undertext"
                        data-toggle="modal"
                        href="#modal-ds-nguoi-cho-vay"
                        onclick="ShowListLender(1587281);"
                      >
                        <div className="td-inner d-flex justify-content-center h-100">
                          <ul className="list-h-1 align-self-start mb-0">
                            <li className="list-h-1__item" />
                          </ul>
                        </div>
                      </td>
                      <td
                        data-toggle="modal"
                        href="#modal-ds-nguoi-cho-vay"
                        onclick="ShowListLender(1587281);"
                      >
                        <div className="td-inner media d-flex justify-content-center">
                          <span
                            className={classnames(
                              'badge align-self-center',
                              Status.filter(a => a[0] === post.state)[0][2]
                            )}
                          >
                            {Status.filter(a => a[0] === post.state)[0][1]}
                          </span>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
        <hr />

        <div className="d-flex">
          <nav
            className="d-flex justify-content-between ml-lg-2"
            aria-label="Page navigation"
          >
            <ul className="pagination pagination-sm mb-0 mr-3">
              <li className="page-item page-item--prev d-flex">
                <a
                  className="page-link"
                  href="javascript:void(0);"
                  onclick="page_click(-1)"
                >
                  Prev
                </a>
              </li>
              <li className="page-item d-flex align-items-center">
                <div className="px-3 text-nowrap">
                  <span id="lblCurrentPage">1</span> of 1
                </div>
              </li>
              <li className="page-item page-item--next d-flex">
                <a
                  className="page-link"
                  href="javascript:void(0);"
                  onclick="page_click(1)"
                >
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TableHistory;
