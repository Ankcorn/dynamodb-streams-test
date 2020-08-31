# Dynamodb Streams Serverless Test

A serverless stack to test out all the possible dynamodb stream lambda events

## Summary

|                    |     INSERT     |          MODIFY          |     REMOVE     |   |
|:------------------:|:--------------:|:------------------------:|:--------------:|---|
| KEYS_ONLY          | Keys           | Keys                     | Keys           |   |
| NEW_IMAGE          | Keys, NewImage | Keys, NewImage           | Keys           |   |
| OLD_IMAGE          | Keys           | Keys, OldImage           | Keys, OldImage |   |
| NEW_AND_OLD_IMAGES | Keys, NewImage | Keys, NewImage, OldImage | Keys, OldImage |   |

And data looks like this:

```yaml
Records:
  - eventName: INSERT|MODIFY|REMOVE
    dynamodb:
      Keys: {} # always exists
      NewImage: {} # sometimes exists, see table
      OldImage: {} # sometimes exists, see table
      StreamViewType: KEYS_ONLY|NEW_IMAGE|OLD_IMAGE|NEW_AND_OLD_IMAGES
```

Thanks [@hugosenari](https://github.com/hugosenari) for formatting and summarising the data

## Raw Data
      
### KEYS_ONLY

INSERT

```json
{
    "Records": [
        {
            "eventID": "aadf063d99e89af53c4212e558d681b3",
            "eventName": "INSERT",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594935882,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "400000000008367680596",
                "SizeBytes": 6,
                "StreamViewType": "KEYS_ONLY"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-KeysOnlyTable-T9GRX95EFTIV/stream/2020-07-16T21:40:16.972"
        }
    ]
}
```

MODIFY

```json
{
    "Records": [
        {
            "eventID": "77b5c52bda7f9c50d4922ad00413bf49",
            "eventName": "MODIFY",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594935886,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "500000000008367681389",
                "SizeBytes": 6,
                "StreamViewType": "KEYS_ONLY"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-KeysOnlyTable-T9GRX95EFTIV/stream/2020-07-16T21:40:16.972"
        }
    ]
}
```

REMOVE

```json
{
    "Records": [
        {
            "eventID": "60fd5b69fc75fa8d57543d88c67c8b35",
            "eventName": "REMOVE",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594935893,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "600000000008367682943",
                "SizeBytes": 6,
                "StreamViewType": "KEYS_ONLY"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-KeysOnlyTable-T9GRX95EFTIV/stream/2020-07-16T21:40:16.972"
        }
    ]
}
```

#### NEW_AND_OLD_IMAGES

INSERT

```json
{
    "Records": [
        {
            "eventID": "875a6e2b07e9c20f47730c69e960bc00",
            "eventName": "INSERT",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594936234,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "NewImage": {
                    "data": {
                        "S": "test"
                    },
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "100000000027074219927",
                "SizeBytes": 20,
                "StreamViewType": "NEW_AND_OLD_IMAGES"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-NewOldTable-7U1U2U9UKTB7/stream/2020-07-16T21:40:16.952"
        }
    ]
}
```

MODIFY

```json
{
    "Records": [
        {
            "eventID": "0793bb90d79a00e0788470675381e4d8",
            "eventName": "MODIFY",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594936238,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "NewImage": {
                    "data": {
                        "S": "hello"
                    },
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "OldImage": {
                    "data": {
                        "S": "test"
                    },
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "200000000027074221525",
                "SizeBytes": 35,
                "StreamViewType": "NEW_AND_OLD_IMAGES"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-NewOldTable-7U1U2U9UKTB7/stream/2020-07-16T21:40:16.952"
        }
    ]
}
```

REMOVE

```json
{
    "Records": [
        {
            "eventID": "b448ea3c6900d9cd7c948bbfeb612d47",
            "eventName": "REMOVE",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594936244,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "OldImage": {
                    "data": {
                        "S": "hello"
                    },
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "300000000027074223641",
                "SizeBytes": 21,
                "StreamViewType": "NEW_AND_OLD_IMAGES"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-NewOldTable-7U1U2U9UKTB7/stream/2020-07-16T21:40:16.952"
        }
    ]
}
```

#### NEW_IMAGE

INSERT

```json
{
    "Records": [
        {
            "eventID": "4f5dde6250d4c12800433bfae4d2eb7c",
            "eventName": "INSERT",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594936434,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "NewImage": {
                    "data": {
                        "S": "test"
                    },
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "100000000061894315953",
                "SizeBytes": 20,
                "StreamViewType": "NEW_IMAGE"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-NewTable-UK5PFMFS64LS/stream/2020-07-16T21:40:16.987"
        }
    ]
}
```

MODIFY

```json
{
    "Records": [
        {
            "eventID": "8e6309cdd495ee3d572adae3ff59e7dc",
            "eventName": "MODIFY",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594936438,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "NewImage": {
                    "data": {
                        "S": "hello"
                    },
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "200000000061894317177",
                "SizeBytes": 21,
                "StreamViewType": "NEW_IMAGE"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-NewTable-UK5PFMFS64LS/stream/2020-07-16T21:40:16.987"
        }
    ]
}
```

REMOVE

```json
{
    "Records": [
        {
            "eventID": "8de0a450dea975335f55c65b33101f36",
            "eventName": "REMOVE",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594936443,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "300000000061894318607",
                "SizeBytes": 6,
                "StreamViewType": "NEW_IMAGE"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-NewTable-UK5PFMFS64LS/stream/2020-07-16T21:40:16.987"
        }
    ]
}
```

#### OLD_IMAGE

INSERT

```json
{
    "Records": [
        {
            "eventID": "802f021c18f3a8e4f1cab0f371fa92b2",
            "eventName": "INSERT",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594936530,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "100000000009040647000",
                "SizeBytes": 6,
                "StreamViewType": "OLD_IMAGE"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-OldTable-192VIK0LBSGG9/stream/2020-07-16T21:40:17.202"
        }
    ]
}
```

MODIFY

```json
{
    "Records": [
        {
            "eventID": "8d254a4baaef3bd590ac40025ec00cf5",
            "eventName": "MODIFY",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594936536,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "OldImage": {
                    "data": {
                        "S": "test"
                    },
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "200000000009040648822",
                "SizeBytes": 20,
                "StreamViewType": "OLD_IMAGE"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-OldTable-192VIK0LBSGG9/stream/2020-07-16T21:40:17.202"
        }
    ]
}
```

REMOVE

```json
{
    "Records": [
        {
            "eventID": "c393b72dbc863cf40b1b993c2af9a4ab",
            "eventName": "REMOVE",
            "eventVersion": "1.1",
            "eventSource": "aws:dynamodb",
            "awsRegion": "eu-west-1",
            "dynamodb": {
                "ApproximateCreationDateTime": 1594936540,
                "Keys": {
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "OldImage": {
                    "data": {
                        "S": "hello"
                    },
                    "sk": {
                        "S": "b"
                    },
                    "pk": {
                        "S": "a"
                    }
                },
                "SequenceNumber": "300000000009040650280",
                "SizeBytes": 21,
                "StreamViewType": "OLD_IMAGE"
            },
            "eventSourceARN": "arn:aws:dynamodb:eu-west-1:🦊:table/dynamodb-streams-test-experiment-OldTable-192VIK0LBSGG9/stream/2020-07-16T21:40:17.202"
        }
    ]
}
```

