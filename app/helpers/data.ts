import { Person } from "../model/person";
import { Section } from "../model/section";

const data: Section[] =
    [
        {
            topic: "Limits & Continuity",
            lessons: [
                {
                    id: "q9jvf6wr2",
                    title: "Limit of a Function",
                    cardColor: '#00AEF0',
                    progressColor: "#63c5eb"
                },
                {
                    id: "j1m5lwoa",
                    title: "Limit Laws",
                    cardColor: '#6BBE45',
                    progressColor: "#9de67c"
                },
                {
                    id: 'abn9sp98',
                    title: "Limits of some Functions",
                    cardColor: '#EE2124',
                    progressColor: "#f0696b"
                },
                {
                    id: 'uqa8m9qq',
                    title: "Continuity",
                    cardColor: '#00AEF0',
                    progressColor: "#63c5eb"
                },
                {
                    id: 'ep9ndhtd',
                    title: "Discontinuity",
                    cardColor: '#6BBE45',
                    progressColor: "#9de67c"
                },
                {
                    id: 'cbs3fu69',
                    title: "Theorems",
                    cardColor: '#EE2124',
                    progressColor: "#f0696b"
                }
            ]
        },
        {
            topic: "Derivatives",
            lessons: [
                {
                    id: "ui0ajkda",
                    title: "Introduction to Derivatives",
                    cardColor: '#00AEF0',
                    progressColor: "#63c5eb"
                },
                {
                    id: "nelgdgiw",
                    title: "Implicit Differentiation",
                    cardColor: '#6BBE45',
                    progressColor: "#9de67c"
                },
                {
                    id: "b7rjn659",
                    title: "Higher-order Derivatives",
                    cardColor: '#EE2124',
                    progressColor: "#f0696b"
                }
            ]
        }
    ]

const people: Person[] = [
    {
        name: "Jan Mcknere Pavia",
        uri: "https://lh3.googleusercontent.com/fife/AAWUweXRlVOoWH3iEq7JbntcOBz4Se4KglYnwP2Nm_AGQYd2FHUI9SlZY_7OUthxGvo3Lmll6OPI365PYsJ5GSEpEVCoG1mr4JY4nIEUnZ1RJCPi8JXSG2dhpK6rDy5DeK_Ur7gs9RGWOf3lPjjcYMGARYXCuvGGidm0rrBcyOev4I8K7GiHJXxuJCScAP4MGZm-xnyL24fv26YnFM9GhaEsHBpQWj8KNmMna_ZPVQcStINf-H-RXUcCoiklukmOhrvjik6Iid36UaDFpsnJae2hAs6DyHCQl_dtzEMiTUQx9crUjr4qMpOWKq4vSEBtGyDQh6TvYF_43wze5dXhmmmkLGmD3UgOEttKSQDWdMUKep7bielCjFwpA9jdRa64vDZI9Fx4bV9Kf3Z2i0J2eRNOTdazEEDOjik4PZ-mmvHLDtyR02dCmsQQ4bVWr31ZHPM48oREjCrSohjD9qlKyvsdhK6PQIlJfskyen40Q8WMIXqxnmF5Ju6JyRBDd9Nb0igYzj9nPj-iCC3c0zllrwdazI6urIN2jhuwuYNidSlv3D3fVQYQBAIdNfShbf76biNxlJS7jC7jQmjpHu5f_gncJfAozsfjJL7RtUBYPhD2mPYzmj8CxxkxoC3aDJ3kCMYLWhdsV9yNnFuiJBe-0LIy_uFJm-kGbHFHQ3YRVlStIBOzyp1hYfARPZBEF06X_KBg-EJxWmMUrRgfv1oESZPjaSzusolmAQ5hcwM=w2586-h1482-ft",
    },
    {
        name: "Ullreich Pascual",
        uri: "https://lh3.googleusercontent.com/fife/AAWUweV8VAvy-bCRJxlxChaxth_lR2ibi1GAVahkXGS8_eSC7qUivBJj8Pf1Fe9qpJX_qge8wD9M3U0EAx4UbgUfO6mpj7GLcVIER05Cc4gmgjqOU6mNNlkfk2bkMq93liABPVr3dz92TT2PM31mp-LGlAwNaSZZM40h8tm6KfCwcu2-ApdbjvP6IDqzmmOV5tkmkRxhGtqYAsGye4biGYNLRUyTtvCoznytoUp3JJdCiA3tynRKfhuoFyoy-5NI5kHVCfF-3ayhfzBu4Gs38bRrrkZZns2eflKDNBeYj_ULDjGoQYt_uYXqqnAqoK3kX3OpVw2636hkY9z_lhlt5a21IDR87dmC7VDPGxFPi-o349u5rBhrcYe5csL6-12y3sFhh79bU4cNqIoKSo-ZoqT_uPwMKDy0EUmsYKHsplwkCK-AP6hLVKZQcOPFdP56i6efOILtS_gcZYW9mzex-YT9gADSf9vzm1gVMVrrqnJDYaE8BT5XNXCY0HiqDR_qkwNUCwBZOEm44vcbuKEEVpIV-_keZ7HvLXCZZR7mzwHtOql0LGzBx4VIrW_ntMuGZiPYBwztvdpV5QFH9hMpI1m8JhXMvy1fIPU5Fl7hUC6LfmGR9fSXSOdbLaD22sHzdXHeW94ohzGcg3in-iQ5MOOpBMbk-n0eTy8LHIhyWrWutYs_EsalV5W7884sa8cxq0k2eJNbda8YabOPeh_G78WFRNUFGF6YTL4KUPM=w2586-h1482-ft",
    },
    {
        name: "Kyla Venice Supat",
        uri: "https://lh3.googleusercontent.com/fife/AAWUweV7BB8644fVOR94nEJaO80QkDTv-lrSG3EHIXG8JfRPsI0W9kMCI2Bx5IeeNlgF0iK8xwg8UCSoPYZfTcbkcw5eMqTZwxxqAX6m4yoBRVlPAHyly09mlJd5GrSK04QW4JbH68h41rTgvVSHdaC5VZSJTm5ajBvnYv_riPcN47OX_2HED0xCBfR_GxaSMudFf4wD0NS8czwzIeYg3yWNPKggECiOQOrcp-Kh5oSDMUKbqzbDW0Bl2WEb7NfYnOBdYOAwSyW4BqS8seXj6foFl7Z4fcM7QUr6CGSywnf-zTRWfGVYUHdKWOVFQnUTSy74208jCevb1Xi-ck6vCbDLfxPg2OfCtxV0XY39UOs0IPOYk6VVFXjZefADKDmmytiDt886vXotFJ8c8tQD69Dyxhn7UObQf9xqtrY5-KmG3CC_-gHX2m9Z1zXG2Ms8D7IW6lB0m8X0IlSJ6hMMrBYhGtLTmimN3iwu5K4APlw4HkxXo5yWMGcS05q7MSII_X5TxSOzmAbwO1HqhwrnTShMU9mMefZn8xCzwZ9FYlcmCAt2dvtKkt5iHR3QrNBQ7oA70miGaMqtymqMCgeLldaMuK4-MmDHdl3y9764VSn5boshpI1JU1ah9hJTdbBhSZMUocCl9BjA4M1x3CpwwgiXalmCvM_hujNpws5h0OnF9aCZqCbzAM0_SWHr6s5CNm4g8Ty0E39tWWpGmSQuUrDOl38vSnQhkPbu2Sc=w2586-h1482-ft",
    },
    {
        name: "Lawrence Nola",
        uri: "https://lh3.googleusercontent.com/fife/AAWUweWj0woGbr8Vl7_Qp-rtnNn-GcXYf_DBuRrTaTD1JMwqpN4ECQ9-b7KkRYNmCKs2ZohjVf6T7GvUUv1I9QnHabXJDxjBnI4M46-s2WTKNxW-GxIgnBKicbzsyJ6POfAbYSb0t629Zs69MITZ4V-yVlQRzKAD89SdqlPq2s6QJGzmKncX5NEMIVO9SZyzwD4rvmsv3RkUeVLESsSu6nIMeb-2uC893FdQABUiiKKNdMo1DZD0-F7iqkncFYSi0tbUgcMsM-e6Aoh5Rn1X18Mws9yxYwdznsExnLEI_qzQRN4lcjurVfyBG2I0aOS9PY5XkLZXuQYpEmI-sykIVWVOGMii74Sljm9hWihumeu2KYc5EGJrn0LEWwWm5sJ094SqdTps4tsd_DrmGkesfARQjO7PUEcuNNcXqH2jD9CRk4wASClDjACkYgpLKJZbVukNBCYwpqH9MzlNisn9s4AInkwcT5vbHDo12Zyt1bVNLbMDg1ZssyOoTx2i90Mo_zq4MD6k8tf1l2O340JFVKToY1pPN_S46gNJJcmvI2xw9v6X51aix_EYfEHcRSdiPRMfotAcelc38OoEsraK72uYzA0hlgT7kefkymSCp3ssaumN5k_rNUa6ai2-VakiJgGgq3a_P-h6wCDZXh-hkfrrQabUqmq29OlmehjmuWB2Jkl-RpP9QvF2z-UhQ8lyQ8xvGsC_iV9RBTofNOeKSKWZRbI3-famJKiYMcg=w2586-h1482-ft",
    },
    {
        name: "Shenn Mikhail Yanzon",
        uri: "https://lh3.googleusercontent.com/fife/AAWUweUFO4dmI1lZqtMSxUxyyDTwGYDcjNnfh6Z8mHOt7ogE0wYVmVmUNI7SLORiK5GC5FoHpnbtlR0WP1AmWI0isR5pjGNAEYfYC_fOKPwUdR1XccTK5rsRdJc-8z2eZqXWW1PZhmRdMBU1vr55B9hHSlz0ubsNW_Te4HsN21mfRXpXd7HVflPRXWODDzLI1n45s1PcavFCaiXI7Sqf5mX3Ba8II5Ba3x3PQdFgNZREWfiu9FkApBZO5iz_fFDCx013YNYYPVzPq0JO0SQuFiU9qFDsr8w-jNmxWpPFiLYlSuQ2lqwFGH4jqPy4fZvkKyboC0jZC5Wtf9vcVKB8Gw3KtMAuRxgwUF57WCS6lSdaZzaHxoDCKeS5jHkrnRNy9XQicAi3eJwFfplPEKQrnEtUfpaa4fB-VSBO6GUyH8PwER-QATuaqEHdAS2fnicPBrw2txdcg-M7oAPwJLekUa2GqhhOF1yGybbRB1VAfVPfm9tniqr17lcacUSe0Uq4lIABySS8_lyRi7qNUJA_sx38YaBwSbR4b_qelpK_Mj1kxH_dPA7wzqIkEj3kqNcKE408HSnV8v3CtoOc3R7E6B0pS0a1FuPHqTWYxomtCs-fwktQo_69elfyB5LytxqoyM289Rv0DgO4E37S7yFBDtjamaq4ZT5OAQGVGSqkkYDMTGtbdgXV-2fC9ovsY2CvuPhy0YzlleyV9ICbktCYrUzsdXzwIzt9fEpOKVM=w2586-h1482-ft",
    },
]

export { data, people };