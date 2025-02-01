<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interaktiver Stammbaum</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.8/raphael.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/treant-js/1.0/Treant.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }
        header {
            background: #333;
            color: white;
            padding: 20px;
            font-size: 24px;
        }
        .tree-container {
            width: 100%;
            height: 600px;
            overflow: auto;
            margin-top: 20px;
        }
        .Treant {
            width: 100%;
            height: 100%;
        }
    </style>
</head>
<body>
    <header>Interaktiver Stammbaum</header>
    <div class="tree-container" id="tree"></div>
    
    <script>
        var config = {
            chart: {
                container: "#tree",
                levelSeparation: 30,
                siblingSeparation: 15,
                subTeeSeparation: 15,
                nodeAlign: "BOTTOM",
                connectors: {
                    type: "step"
                },
                node: {
                    HTMLclass: "node"
                }
            },
            nodeStructure: {
                text: { name: "Großeltern" },
                children: [
                    {
                        text: { name: "Eltern" },
                        children: [
                            { text: { name: "Kind 1" } },
                            { text: { name: "Kind 2" } }
                        ]
                    }
                ]
            }
        };
        new Treant(config);
    </script>
</body>
</html>
