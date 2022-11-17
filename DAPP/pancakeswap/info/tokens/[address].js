"use strict";
(() => {
var exports = {};
exports.id = 861;
exports.ids = [861];
exports.modules = {

/***/ 56646:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var views_Info_Tokens_TokenPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36615);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97119);
/* harmony import */ var views_Info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(63252);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([views_Info_Tokens_TokenPage__WEBPACK_IMPORTED_MODULE_1__, views_Info__WEBPACK_IMPORTED_MODULE_3__]);
([views_Info_Tokens_TokenPage__WEBPACK_IMPORTED_MODULE_1__, views_Info__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const TokenPage = ({ address  })=>{
    if (!address) {
        return null;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_Tokens_TokenPage__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        routeAddress: address
    });
};
TokenPage.Layout = views_Info__WEBPACK_IMPORTED_MODULE_3__/* .InfoPageLayout */ .O;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenPage);
const getStaticPaths = ()=>{
    return {
        paths: [],
        fallback: true
    };
};
const getStaticProps = async ({ params  })=>{
    const address = params?.address;
    // In case somebody pastes checksummed address into url (since GraphQL expects lowercase address)
    if (!address || !(0,utils__WEBPACK_IMPORTED_MODULE_2__/* .isAddress */ .UJ)(String(address).toLowerCase())) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        };
    }
    return {
        props: {
            address
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 36615:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_NextLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12966);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(57518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(30822);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(85551);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(61461);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(85118);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(77067);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(10993);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(60172);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(77921);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(90599);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(61629);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(77208);
/* harmony import */ var _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(70617);
/* harmony import */ var components_Layout_Page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75915);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97119);
/* harmony import */ var _pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(15260);
/* harmony import */ var views_Info_hooks_useCMCLink__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17847);
/* harmony import */ var views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39639);
/* harmony import */ var utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59604);
/* harmony import */ var views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(27197);
/* harmony import */ var views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(46573);
/* harmony import */ var state_info_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(34810);
/* harmony import */ var views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1557);
/* harmony import */ var views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57339);
/* harmony import */ var state_user_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(921);
/* harmony import */ var config_constants_info__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7269);
/* harmony import */ var _pancakeswap_localization__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52775);
/* harmony import */ var views_Info_components_InfoCharts_ChartCard__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(33064);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Layout_Page__WEBPACK_IMPORTED_MODULE_4__, views_Info_hooks_useCMCLink__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_7__, views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_9__, views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_10__, views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_12__, views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_13__, state_user_hooks__WEBPACK_IMPORTED_MODULE_14__, views_Info_components_InfoCharts_ChartCard__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__]);
([components_Layout_Page__WEBPACK_IMPORTED_MODULE_4__, views_Info_hooks_useCMCLink__WEBPACK_IMPORTED_MODULE_6__, views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_7__, views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_9__, views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_10__, views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_12__, views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_13__, state_user_hooks__WEBPACK_IMPORTED_MODULE_14__, views_Info_components_InfoCharts_ChartCard__WEBPACK_IMPORTED_MODULE_16__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__, _pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-nested-ternary */ 



















const ContentLayout = styled_components__WEBPACK_IMPORTED_MODULE_3___default().div.withConfig({
    componentId: "sc-d6e665d6-0"
})`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-gap: 1em;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
const StyledCMCLink = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z).withConfig({
    componentId: "sc-d6e665d6-1"
})`
  width: 24px;
  height: 24px;
  margin-right: 8px;

  & :hover {
    opacity: 0.8;
  }
`;
const DEFAULT_TIME_WINDOW = {
    weeks: 1
};
const TokenPage = ({ routeAddress  })=>{
    const { isXs , isSm  } = (0,_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z)();
    const { t  } = (0,_pancakeswap_localization__WEBPACK_IMPORTED_MODULE_15__/* .useTranslation */ .$G)();
    // In case somebody pastes checksummed address into url (since GraphQL expects lowercase address)
    const address = routeAddress.toLowerCase();
    const cmcLink = (0,views_Info_hooks_useCMCLink__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(address);
    const tokenData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useTokenData */ .Ws)(address);
    const poolsForToken = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_11__/* .usePoolsForToken */ .CN)(address);
    const poolDatas = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_11__/* .usePoolDatas */ .zV)(poolsForToken ?? []);
    const transactions = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useTokenTransactions */ .Vq)(address);
    const chartData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useTokenChartData */ .ku)(address);
    // pricing data
    const priceData = (0,state_info_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useTokenPriceData */ .Q4)(address, config_constants_info__WEBPACK_IMPORTED_MODULE_19__/* .ONE_HOUR_SECONDS */ .Tb, DEFAULT_TIME_WINDOW);
    const adjustedPriceData = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        // Include latest available price
        if (priceData && tokenData && priceData.length > 0) {
            return [
                ...priceData,
                {
                    time: new Date().getTime() / 1000,
                    open: priceData[priceData.length - 1].close,
                    close: tokenData?.priceUSD,
                    high: tokenData?.priceUSD,
                    low: priceData[priceData.length - 1].close
                }, 
            ];
        }
        return undefined;
    }, [
        priceData,
        tokenData
    ]);
    const [watchlistTokens, addWatchlistToken] = (0,state_user_hooks__WEBPACK_IMPORTED_MODULE_14__/* .useWatchlistTokens */ .z6)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Layout_Page__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        symbol: tokenData?.symbol,
        children: tokenData ? !tokenData.exists ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                p: "16px",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                    children: [
                        t("No pool has been created with this token yet. Create one"),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NextLink__WEBPACK_IMPORTED_MODULE_2__/* .NextLinkFromReactRouter */ .a, {
                            style: {
                                display: "inline",
                                marginLeft: "6px"
                            },
                            to: `/add/${address}`,
                            children: t("here.")
                        })
                    ]
                })
            })
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    mb: "24px",
                    flexDirection: [
                        "column",
                        "column",
                        "row"
                    ],
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {
                            mb: "32px",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NextLink__WEBPACK_IMPORTED_MODULE_2__/* .NextLinkFromReactRouter */ .a, {
                                    to: "/info",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        color: "primary",
                                        children: t("Info")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NextLink__WEBPACK_IMPORTED_MODULE_2__/* .NextLinkFromReactRouter */ .a, {
                                    to: "/info/tokens",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        color: "primary",
                                        children: t("Tokens")
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            mr: "8px",
                                            children: tokenData.symbol
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            children: `(${(0,_pancakeswap_utils_truncateHash__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z)(address)})`
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            justifyContent: [
                                null,
                                null,
                                "flex-end"
                            ],
                            mt: [
                                "8px",
                                "8px",
                                0
                            ],
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {
                                    mr: "8px",
                                    color: "primary",
                                    href: (0,utils__WEBPACK_IMPORTED_MODULE_5__/* .getBlockExploreLink */ .C)(address, "address"),
                                    children: t("View on BscScan")
                                }),
                                cmcLink && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StyledCMCLink, {
                                    href: cmcLink,
                                    rel: "noopener noreferrer nofollow",
                                    target: "_blank",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .Z, {
                                        src: "/images/CMC-logo.svg",
                                        height: 22,
                                        width: 22,
                                        alt: t("View token on CoinMarketCap")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_SaveIcon__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    fill: watchlistTokens.includes(address),
                                    onClick: ()=>addWatchlistToken(address)
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                    justifyContent: "space-between",
                    flexDirection: [
                        "column",
                        "column",
                        "column",
                        "row"
                    ],
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            flexDirection: "column",
                            mb: [
                                "8px",
                                null
                            ],
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_CurrencyLogo__WEBPACK_IMPORTED_MODULE_7__/* .CurrencyLogo */ .X, {
                                            size: "32px",
                                            address: address
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            ml: "12px",
                                            bold: true,
                                            lineHeight: "0.7",
                                            fontSize: isXs || isSm ? "24px" : "40px",
                                            id: "info-token-name-title",
                                            children: tokenData.name
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            ml: "12px",
                                            lineHeight: "1",
                                            color: "textSubtle",
                                            fontSize: isXs || isSm ? "14px" : "20px",
                                            children: [
                                                "(",
                                                tokenData.symbol,
                                                ")"
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                                    mt: "8px",
                                    ml: "46px",
                                    alignItems: "center",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                            mr: "16px",
                                            bold: true,
                                            fontSize: "24px",
                                            children: [
                                                "$",
                                                (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__/* .formatAmount */ .d)(tokenData.priceUSD, {
                                                    notation: "standard"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            value: tokenData.priceUSDChange,
                                            fontWeight: 600
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NextLink__WEBPACK_IMPORTED_MODULE_2__/* .NextLinkFromReactRouter */ .a, {
                                    to: `/add/${address}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        mr: "8px",
                                        variant: "secondary",
                                        children: t("Add Liquidity")
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NextLink__WEBPACK_IMPORTED_MODULE_2__/* .NextLinkFromReactRouter */ .a, {
                                    to: `/swap?inputCurrency=${address}`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_28__/* ["default"] */ .Z, {
                                        children: t("Trade")
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(ContentLayout, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {
                                p: "24px",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        small: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Liquidity")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        fontSize: "24px",
                                        children: [
                                            "$",
                                            (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__/* .formatAmount */ .d)(tokenData.liquidityUSD)
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        value: tokenData.liquidityUSDChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        mt: "24px",
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Volume 24H")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        fontSize: "24px",
                                        textTransform: "uppercase",
                                        children: [
                                            "$",
                                            (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__/* .formatAmount */ .d)(tokenData.volumeUSD)
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_Percent__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                        value: tokenData.volumeUSDChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        mt: "24px",
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Volume 7D")
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        fontSize: "24px",
                                        children: [
                                            "$",
                                            (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__/* .formatAmount */ .d)(tokenData.volumeUSDWeek)
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        mt: "24px",
                                        bold: true,
                                        color: "secondary",
                                        fontSize: "12px",
                                        textTransform: "uppercase",
                                        children: t("Transactions 24H")
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {
                                        bold: true,
                                        fontSize: "24px",
                                        children: (0,utils_formatInfoNumbers__WEBPACK_IMPORTED_MODULE_8__/* .formatAmount */ .d)(tokenData.txCount, {
                                            isInteger: true
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoCharts_ChartCard__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {
                            variant: "token",
                            chartData: chartData,
                            tokenData: tokenData,
                            tokenPriceData: adjustedPriceData
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    scale: "lg",
                    mb: "16px",
                    mt: "40px",
                    children: t("Pools")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoTables_PoolsTable__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                    poolDatas: poolDatas
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_29__/* ["default"] */ .Z, {
                    scale: "lg",
                    mb: "16px",
                    mt: "40px",
                    children: t("Transactions")
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(views_Info_components_InfoTables_TransactionsTable__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                    transactions: transactions
                })
            ]
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {
            mt: "80px",
            justifyContent: "center",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pancakeswap_uikit__WEBPACK_IMPORTED_MODULE_30__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TokenPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 17847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79847);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr_immutable__WEBPACK_IMPORTED_MODULE_0__]);
swr_immutable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

// endpoint to check asset exists and get url to CMC page
// returns 400 status code if token is not on CMC
const CMC_ENDPOINT = "https://3rdparty-apis.coinmarketcap.com/v1/cryptocurrency/contract?address=";
/**
 * Check if asset exists on CMC, if exists
 * return url, if not return undefined
 * @param address token address (all lowercase, checksummed are not supported by CMC)
 */ const useCMCLink = (address)=>{
    const { data: cmcPageUrl  } = (0,swr_immutable__WEBPACK_IMPORTED_MODULE_0__["default"])(address ? [
        "cmcLink",
        address
    ] : null, async ()=>{
        const response = await fetch(`${CMC_ENDPOINT}${address}`);
        if (response.ok) {
            return (await response.json()).data.url;
        }
        return undefined;
    });
    return cmcPageUrl;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCMCLink);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6187:
/***/ ((module) => {

module.exports = require("@ethersproject/abi");

/***/ }),

/***/ 51541:
/***/ ((module) => {

module.exports = require("@ethersproject/address");

/***/ }),

/***/ 65757:
/***/ ((module) => {

module.exports = require("@ethersproject/bignumber");

/***/ }),

/***/ 49935:
/***/ ((module) => {

module.exports = require("@ethersproject/bytes");

/***/ }),

/***/ 26644:
/***/ ((module) => {

module.exports = require("@ethersproject/constants");

/***/ }),

/***/ 12792:
/***/ ((module) => {

module.exports = require("@ethersproject/contracts");

/***/ }),

/***/ 90399:
/***/ ((module) => {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ 76693:
/***/ ((module) => {

module.exports = require("@ethersproject/solidity");

/***/ }),

/***/ 49213:
/***/ ((module) => {

module.exports = require("@ethersproject/strings");

/***/ }),

/***/ 93138:
/***/ ((module) => {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ 18310:
/***/ ((module) => {

module.exports = require("@gnosis.pm/safe-apps-wagmi");

/***/ }),

/***/ 75184:
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 51554:
/***/ ((module) => {

module.exports = require("@uniswap/token-lists");

/***/ }),

/***/ 22534:
/***/ ((module) => {

module.exports = require("@wagmi/core");

/***/ }),

/***/ 75888:
/***/ ((module) => {

module.exports = require("ajv");

/***/ }),

/***/ 22575:
/***/ ((module) => {

module.exports = require("big.js");

/***/ }),

/***/ 34215:
/***/ ((module) => {

module.exports = require("bignumber.js");

/***/ }),

/***/ 74146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 97312:
/***/ ((module) => {

module.exports = require("decimal.js-light");

/***/ }),

/***/ 64175:
/***/ ((module) => {

module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ 5805:
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ 52424:
/***/ ((module) => {

module.exports = require("jsbi");

/***/ }),

/***/ 72607:
/***/ ((module) => {

module.exports = require("local-storage");

/***/ }),

/***/ 3182:
/***/ ((module) => {

module.exports = require("localforage");

/***/ }),

/***/ 90221:
/***/ ((module) => {

module.exports = require("lodash/chunk");

/***/ }),

/***/ 38190:
/***/ ((module) => {

module.exports = require("lodash/flatMap");

/***/ }),

/***/ 57626:
/***/ ((module) => {

module.exports = require("lodash/fromPairs");

/***/ }),

/***/ 1712:
/***/ ((module) => {

module.exports = require("lodash/get");

/***/ }),

/***/ 98492:
/***/ ((module) => {

module.exports = require("lodash/groupBy");

/***/ }),

/***/ 63385:
/***/ ((module) => {

module.exports = require("lodash/keyBy");

/***/ }),

/***/ 9941:
/***/ ((module) => {

module.exports = require("lodash/mapValues");

/***/ }),

/***/ 50541:
/***/ ((module) => {

module.exports = require("lodash/memoize");

/***/ }),

/***/ 49949:
/***/ ((module) => {

module.exports = require("lodash/orderBy");

/***/ }),

/***/ 10582:
/***/ ((module) => {

module.exports = require("lodash/toNumber");

/***/ }),

/***/ 18459:
/***/ ((module) => {

module.exports = require("lodash/uniq");

/***/ }),

/***/ 69309:
/***/ ((module) => {

module.exports = require("lodash/uniqBy");

/***/ }),

/***/ 51162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 92796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 34014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 78524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 95832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 78020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 64406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 24964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 11751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 46220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 10299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 23938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 29565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 35789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 28854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 91292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 34567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 80979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 93297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 36052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 84226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 95052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 59232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 40968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 71853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 88032:
/***/ ((module) => {

module.exports = require("numeral");

/***/ }),

/***/ 16689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 20997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 23655:
/***/ ((module) => {

module.exports = require("recharts");

/***/ }),

/***/ 14161:
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ 98936:
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage");

/***/ }),

/***/ 57518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 95834:
/***/ ((module) => {

module.exports = require("styled-system");

/***/ }),

/***/ 8780:
/***/ ((module) => {

module.exports = require("tiny-invariant");

/***/ }),

/***/ 60656:
/***/ ((module) => {

module.exports = require("tiny-warning");

/***/ }),

/***/ 86350:
/***/ ((module) => {

module.exports = require("toformat");

/***/ }),

/***/ 8906:
/***/ ((module) => {

module.exports = require("wagmi");

/***/ }),

/***/ 22216:
/***/ ((module) => {

module.exports = require("wagmi/chains");

/***/ }),

/***/ 51276:
/***/ ((module) => {

module.exports = require("wagmi/connectors/coinbaseWallet");

/***/ }),

/***/ 74738:
/***/ ((module) => {

module.exports = require("wagmi/connectors/injected");

/***/ }),

/***/ 79035:
/***/ ((module) => {

module.exports = require("wagmi/connectors/metaMask");

/***/ }),

/***/ 61556:
/***/ ((module) => {

module.exports = require("wagmi/connectors/walletConnect");

/***/ }),

/***/ 21176:
/***/ ((module) => {

module.exports = require("wagmi/providers/jsonRpc");

/***/ }),

/***/ 66197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ }),

/***/ 82451:
/***/ ((module) => {

module.exports = import("jotai");;

/***/ }),

/***/ 2752:
/***/ ((module) => {

module.exports = import("jotai/utils");;

/***/ }),

/***/ 69915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 15941:
/***/ ((module) => {

module.exports = import("swr");;

/***/ }),

/***/ 79847:
/***/ ((module) => {

module.exports = import("swr/immutable");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8177,676,1664,5152,3893,8726,3035,8538,5915,9694,5551,7458,309,921,7921,7495,5529,599,617,5934,9145,8110,172,8825,8032,1557,3064], () => (__webpack_exec__(56646)));
module.exports = __webpack_exports__;

})();