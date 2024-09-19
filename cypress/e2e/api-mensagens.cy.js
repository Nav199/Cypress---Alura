describe('Api Adopet',()=> {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMGE0ZDYzNS05M2YwLTRiZWYtYmE5ZC01OWJiMDQ0ZWIxMDMiLCJhZG9wdGVyTmFtZSI6InZpY3RvciIsImlhdCI6MTcyNjc1ODYwOCwiZXhwIjoxNzI3MDE3ODA4fQ.XYfMe8jSSix0D_zPjYV4gXO4iTy_nIQPMohkqyez4vI`
    it('Mensagens da API',()=>{
        cy.request({
            method:'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/10a4d635-93f0-4bef-ba9d-59bb044eb103',
            headers:{authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
    })

    })
    
})