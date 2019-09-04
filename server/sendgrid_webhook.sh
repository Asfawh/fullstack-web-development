function localtunnel {
    lt --subdomain https://mystarkcavernszabel.localtunnel.me --port 5003
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done
