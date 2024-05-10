#define NUMBER_OF_TRANSACTIONS_PER_TICK 1024
#define SIGNATURE_SIZE 64
#define SPECTRUM_DEPTH 24 // Is derived from SPECTRUM_CAPACITY (=N)
#define DEFAULT_SEED ((char *)"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
#define QX_ADDRESS ((char *)"BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARMID")
#define ARBITRATOR ((char *)"AFZPUAIYVPNUYGJRQVLUKOPPVLHAZQTGLYAAUUNBXFTVTAMSBKQBLEIEPCVJ")
#define NUMBER_OF_COMPUTORS 676

#define EXCHANGE_PUBLIC_PEERS 0
#define BROADCAST_MESSAGE 1
#define BROADCAST_COMPUTORS 2
#define BROADCAST_TICK 3
#define BROADCAST_FUTURE_TICK_DATA 8
#define REQUEST_COMPUTORS 11
#define REQUEST_QUORUMTICK 14
#define REQUEST_TICK_DATA 16
#define BROADCAST_TRANSACTION 24
#define REQUEST_CURRENT_TICK_INFO 27
#define RESPOND_CURRENT_TICK_INFO 28
#define REQUEST_TICK_TRANSACTIONS 29
#define REQUEST_ENTITY 31
#define RESPOND_ENTITY 32
#define PROCESS_SPECIAL_COMMAND 255
#define RESPONSE_ENDED 35
#define REQUEST_ISSUED_ASSETS 36
#define RESPOND_ISSUED_ASSETS 37
#define REQUEST_OWNED_ASSETS 38
#define RESPOND_OWNED_ASSETS 39
#define REQUEST_POSSESSED_ASSETS 40
#define RESPOND_POSSESSED_ASSETS 41
#define REQUEST_CONTRACT_FUNCTION 42
#define RESPOND_CONTRACT_FUNCTION 43
#define REQUEST_SYSTEM_INFO 46

#define QX_CONTRACT_ID 1
#define QX_GET_FEE_PR 1
#define QX_GET_ASSET_ASK_ORDER_PR 2
#define QX_GET_ASSET_BID_ORDER_PR 3
#define QX_GET_ENTITY_ASK_ORDER_PR 4
#define QX_GET_ENTITY_BID_ORDER_PR 5

// QX FUNCTIONS
#define QX_ISSUE_ASSET_FN 1
#define QX_TRANSFER_SHARE_FN 2
#define QX_PLACEHOLDER0_FN 3
#define QX_PLACEHOLDER1_FN 4
#define QX_ADD_ASK_ORDER_FN 5
#define QX_ADD_BID_ORDER_FN 6
#define QX_REMOVE_ASK_ORDER_FN 7
#define QX_REMOVE_BID_ORDER_FN 8

#define QTRY_CONTRACT_ID 2

#define RANDOM_CONTRACT_ID 3
#define RANDOM_REVEALCOMMIT 1

// SENDMANY DEFINES
#define QUTIL_CONTRACT_ID 4
#define SENDTOMANYV1 1
#define GETSENDTOMANYV1FEE 1

// for q* apps
#define MAX_INDEX 100
#define MAXTICKS 300000
#define MAX_INPUT_SIZE 1024
#define MAX_TX_SIZE (sizeof(Transaction) + MAX_INPUT_SIZE + SIGNATURE_SIZE + sizeof(struct quheader))
#define MAXPEERS 128
#define TWOTHIRDS ((NUMBER_OF_COMPUTORS/3)*2 + 1)
#define DATADIR ((char *)"data")
#define EPOCHSROOT ((char *)".")

// FEES
#define SENDMANYFEE 10
#define QXTRANSFERFEE 1000000


// qserver
#define MAXADDRESSES 1000001
#define NUMASSETS (sizeof(ASSETS)/sizeof(*ASSETS))
//#define ADDRSCAN_DEPTH 5000
//#define MAXENTITY_PERSECOND 1024

#ifdef TESTNET
#define DEFAULT_NODE_PORT 31841
#define DEFAULT_NODE_IP ((char *)"91.210.226.133") //193.135.9.63")
#define TICKOFFSET 3
#else
#define DEFAULT_NODE_PORT 21841
#define DEFAULT_NODE_IP ((char *)"45.135.201.80")
#define TICKOFFSET 5
#endif

static const char *Peers[] =
{
#ifdef TESTNET
    "193.135.9.63"
#else
    "45.135.201.80",
    "31.214.243.32",
    "185.117.0.116",
    "88.198.25.67",
    "136.243.43.230",
    "31.214.243.25",
    "144.76.237.194",
    "136.243.36.28",
    "148.251.185.19",
    "5.199.134.150",
#endif
};

