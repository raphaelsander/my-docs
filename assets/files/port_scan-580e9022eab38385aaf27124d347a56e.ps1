param($hostname)

$ports = 21,22,53,80,443,8080

if ($hostname) {
    ForEach ($port in $ports) {
        $result = Test-NetConnection $hostname -Port $port -InformationLevel Quiet -WarningAction SilentlyContinue
        if ($result) {
            echo "TCP/$port Open"
        }
    }
} else {
    echo "Use: .\port_scan.ps1 <hostname>"
    echo "E.g.: .\port_scan.ps1 8.8.8.8"
}
