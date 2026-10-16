/* =====================================
   SERVIÇOS ANGOLA — PROFISSIONAIS DO BANCO
   Só carrega os que o administrador aprovou.
   Preenche o array global PROFISSIONAIS (de dados.js)
   sem o substituir, para o app.js continuar a funcionar.
===================================== */

async function carregarProfissionais() {
    // Limpa quaisquer dados estáticos que ainda existam em dados.js
    PROFISSIONAIS.length = 0;

    const { data, error } = await supabaseClient
        .from('profissionais')
        .select('*')
        .eq('estado', 'aprovado')
        .order('criado_em', { ascending: false });

    if (error) {
        console.error('Erro ao carregar profissionais:', error.message);
        return PROFISSIONAIS;
    }

    data.forEach(p => {
        PROFISSIONAIS.push({
            ...p,
            foto: p.foto_url || '',
            servicos: Array.isArray(p.servicos) ? p.servicos : [],
            trabalhos: Array.isArray(p.trabalhos) ? p.trabalhos : []
        });
    });

    return PROFISSIONAIS;
}