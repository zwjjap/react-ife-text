import styled from 'styled-components';

const HomeContainer = styled.div`
  .bc-con{
    position: relative;
    .breadcrumb{
      display: inline-block;
    }
    .ant-calendar-picker{
      display: inline-block;
      position: absolute;
      right: 0;
      top: 7px;
    }
  }
  .wrapper{
    padding: 0px;
    .ant-row{
      padding: 1rem;
      .ant-card{
        border-radius: 0.3rem;
        .ant-card-head{
          padding: 0 1rem;
          .ant-card-head-title{
            font-weight: bold;
          }
        }
      }
      &.machine{
        .ant-col-8{
          padding: 0 0.5rem;
          &:nth-of-type(1){
            padding-left: 0;
          }
          &:nth-of-type(3){
            padding-right: 0;
          }
          .ant-card-body {
            padding: 1rem;
            .ant-row {
              padding: 0;
            }
          }
        }
      }
      .bus-sort{
        height: 24rem;
        padding: 0 0 0 0.5rem;
        .ant-card{
          height: 100%;
        }
        .ant-card-body {
          padding: 1rem;
          .ant-row {
            padding: 0 0 1rem 0;
            &.bus-table{
              padding: 0;
              .ant-row{
                padding: 0;
                &.t-head{
                  border-bottom: 1px solid #CCCCCC;
                  color: #CCCCCC;
                  padding: 0.7rem 0;
                }
                &.t-body{
                  .t-tr{
                    border-bottom: 1px solid #CCCCCC;
                    padding: 0.7rem 0;
                    .over-hid{
                      overflow: hidden;
                    }
                    .proportion{
                      height: 0.5rem;
                      background: rgba(73, 169, 238, 1);
                      margin-top: 0.3rem;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .ant-col-16{
        &.trend{
          height: 24rem;
          .ant-card{
            height: 100%;
          }
        }
        padding: 0 0.5rem 0 0;
        .ant-card-body{
          padding: 1rem;
          .ant-row{
            padding: 0 0 1rem 0;
            &.chart{
              padding: 0;
            }
            .fl-lt{
              float: left;
              &:after{
                clear: left;
              }
            }
            .fl-rt{
              float: right;
              &:after{
                clear: right;
              }
              &.ch-tim{
                padding: 0.5rem 0.5rem 0 0;
                span{
                  margin-right: 0.5rem;
                  &.active{
                    color: #108EE9;
                  }
                }
              }
            }
            .ave-time{
              display: inline-block;
              margin-right: 0.5rem;
              font-weight: bold;
            }
          }
        }
      }
      .ant-col-6{
        padding: 0 0.5rem;
        &:nth-of-type(1){
          padding-left: 0;
          .ant-card{
            .ant-card-body{
              .ant-row{
                .ant-col-8{
                  .img-wrap{
                    background: #49a9ee;
                  }
                }
              }
            }
          }
        }
        &:nth-of-type(2){
          .ant-card{
            .ant-card-body{
              .ant-row{
                .ant-col-8{
                  .img-wrap{
                    background: #98d87d;
                  }
                }
              }
            }
          }
        }
        &:nth-of-type(3){
          .ant-card{
            .ant-card-body{
              .ant-row{
                .ant-col-8{
                  .img-wrap{
                    background: #ffd86e;
                  }
                }
              }
            }
          }
        }
        &:nth-of-type(4){
          padding-right: 0;
          .ant-card{
            .ant-card-body{
              .ant-row{
                .ant-col-8{
                  .img-wrap{
                    background: #f3857c;
                  }
                }
              }
            }
          }
        }
        .ant-card{
          .ant-card-body{
            padding: 1rem;
            .ant-row{
              padding: 0;
              .ant-col-8{
                padding: 0.5rem;
                .img-wrap{
                  text-align: center;
                  padding: 1rem;
                  border-radius: 10rem;
                }
              }
              span{
                padding: 0.2rem;
              }
            }
          }
        }
      }
    }
  }
`;

export default HomeContainer;
